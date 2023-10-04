import type { RootState } from "@/store/store";

export const selectFavoritesRecipes = (state: RootState) => state.favorites.favoritesRecipes;
