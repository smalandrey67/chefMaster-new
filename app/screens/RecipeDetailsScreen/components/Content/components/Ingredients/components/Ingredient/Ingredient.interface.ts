// import type { Ingredient } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen.interface";

// export interface IngredientProps extends Omit<, "id"> {}
export interface IngredientProps {
	name: string;
	image: string;
	unit: string;
	amount: string;
}
