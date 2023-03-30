import { api } from "@/configs/axios.config";

import type { Recipe } from "@/interfaces/Recipe.interface";

export const RecipesByCategoryScreenService = {
	async getRecipesByCategory(category: string): Promise<Recipe[]> {
		const { data: recipesByCategory } = await api.get<Recipe[]>(`recipes/category/${category}`);
		return recipesByCategory;
	}
};
