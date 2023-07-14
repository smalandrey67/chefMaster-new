import type { Recipe } from "@/interfaces/Recipe.interface";

export type Ingredient = {
	name: string;
	image: string;
	unit: string;
	amount: number;
	id: string;
};

type CookingStepIngredient = Omit<Ingredient, "unit" | "amount">[];

export type CookingStep = {
	ingredients: CookingStepIngredient;
	stepCount: number;
	step: string;
	id: string;
};

export interface RecipeDetails extends Recipe {
	description: string;
	ingredients: Ingredient[];
	cooking: CookingStep[];
}

export interface RecipeDetailsScreenProps {
	recipeDetails: RecipeDetails;
}
