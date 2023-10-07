import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { lcs } from "app/shared/lib/lcs/lcs";

import type { Recipe } from "@/interfaces/Recipe.interface";
import type { FavoritesState } from "./favorites.interface";

const initialState: FavoritesState = {
	favoritesRecipes: lcs.getItem<Recipe[]>("favoriteRecipes") || []
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		toggleFavoriteRecipe: {
			reducer: (state, { payload }: PayloadAction<Recipe>): void => {
				const alreadyExistFvRecipe = state.favoritesRecipes.findIndex((fvRecipe) => fvRecipe._id === payload._id);

				if (alreadyExistFvRecipe > -1) {
					state.favoritesRecipes = state.favoritesRecipes.filter((fvRecipe) => fvRecipe._id !== payload._id);
					return;
				}

				state.favoritesRecipes.push(payload);
			},
			prepare: (favoriteRecipe: Recipe, localStorageKey: string) => {
				return {
					payload: favoriteRecipe,
					meta: { localStorageKey }
				};
			}
		}
	}
});

export const { reducer: favoritesReducer, actions: favoritesActions } = favoritesSlice;
