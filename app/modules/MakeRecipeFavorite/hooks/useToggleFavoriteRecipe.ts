import { useAppDispatch } from "@/hooks/useRedux";
import { toggleFavoriteRecipe } from "../slices/favorites/favorites.actions";

import type { Recipe } from "@/interfaces/Recipe.interface";

export const useToggleFavoriteRecipe = (favoriteRecipe: Recipe) => {
	const dispatch = useAppDispatch();

	const toggleRecipeInFavoriteList = (): void => {
		dispatch(toggleFavoriteRecipe(favoriteRecipe, "favoriteRecipes"));
	};

	return { toggleRecipeInFavoriteList };
};
