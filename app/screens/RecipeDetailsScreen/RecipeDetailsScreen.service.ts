import { api } from "@/configs/ky.config";

import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";

export const RecipeDetailsScreenService = {
	async getRecipeDetails(recipeId: string): Promise<RecipeDetails[]> {
		const recipeDetails: RecipeDetails[] = await api.get(`recipes/details/${recipeId}`).json();
		return recipeDetails;
	}
};
