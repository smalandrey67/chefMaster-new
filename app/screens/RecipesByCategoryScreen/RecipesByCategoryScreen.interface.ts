import type { Recipe } from "@/interfaces/Recipe.interface";

export interface RecipesByCategoryScreenProps {
	recipesByCategory: Recipe[];
	selectedCategory: string;
}
