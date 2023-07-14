import type { Ingredient } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen.interface";

export interface IngredientProps extends Omit<Ingredient, "id"> {}
