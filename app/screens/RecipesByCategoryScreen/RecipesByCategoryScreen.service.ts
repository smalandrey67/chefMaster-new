import { api } from "@/configs/ky.config";

import type { Recipe } from "@/interfaces/Recipe.interface";

export const RecipesByCategoryScreenService = {
	async getRecipesByCategory(category: string): Promise<Recipe[]> {
		const recipesByCategory: Recipe[] = await api.get(`recipes/${category}`).json();
		return recipesByCategory;
	}
};
