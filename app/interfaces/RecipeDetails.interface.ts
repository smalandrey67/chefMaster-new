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

export interface RecipeDetails {
	_id: string;
	title: string;
	image: string;
	cookTime: string;
	rating: number;
	cookLevel: string;
	description: string;
	ingredients: Ingredient[];
	cooking: CookingStep[];
}
