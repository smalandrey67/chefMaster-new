import { useAppSelector } from "@/hooks/useRedux";
import { selectFavoritesRecipes } from "../slices/favorites/favorites.selectors";

export const useGetHeartColor = (idOfCurrentRecipe: string) => {
	const favoriteRecipes = useAppSelector(selectFavoritesRecipes);
	const isCurrentRecipeInFavoriteList = favoriteRecipes.some((fvRecipe) => fvRecipe._id === idOfCurrentRecipe);

	return isCurrentRecipeInFavoriteList ? "red" : "black";
};
