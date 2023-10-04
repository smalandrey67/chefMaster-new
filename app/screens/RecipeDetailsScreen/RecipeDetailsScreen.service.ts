import { $api } from "@/config/axios.config";

import type { RecipeDetails } from "./RecipeDetailsScreen.interface";

export const RecipeDetailsScreenService = {
	async getRecipeDetails(recipeId: string): Promise<RecipeDetails> {
		const { data: recipeDetails } = await $api.get<RecipeDetails>(`/recipes/details/${recipeId}`);
		return recipeDetails;
	}
};
