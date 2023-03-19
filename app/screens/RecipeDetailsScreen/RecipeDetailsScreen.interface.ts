import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";

export interface RecipeDetailsScreenProps {
	recipeDetails?: RecipeDetails;
	error?: string;
}
