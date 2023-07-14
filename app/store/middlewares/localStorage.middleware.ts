import { lcs } from "@/utils/localStorage.util";
import { Middleware, AnyAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

const localStorageMiddleware: Middleware<unknown, RootState> = (store) => (next) => (action: AnyAction) => {
	next(action);

	const localStorageKey = action.meta?.localStorageKey;

	if (localStorageKey) {
		switch (action.type) {
			case "favorites/toggleFavoriteRecipe": {
				const upToDataFavoritesRecipes = store.getState().favorites.favorites;

				lcs.setItem(localStorageKey, upToDataFavoritesRecipes);
				break;
			}
			default: {
				break;
			}
		}
	}
};

export default localStorageMiddleware;
