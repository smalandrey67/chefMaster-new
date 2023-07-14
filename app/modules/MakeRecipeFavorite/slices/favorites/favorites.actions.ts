import { favoritesActions } from "./favorites";

import type { Recipe } from "@/interfaces/Recipe.interface";
import type { AppThunk } from "@/store/store";

export const toggleFavoriteRecipe =
	(favoriteRecipe: Recipe, localStorageKey: string): AppThunk =>
	(dispatch): void => {
		dispatch(favoritesActions.toggleFavoriteRecipe(favoriteRecipe, localStorageKey));
	};
