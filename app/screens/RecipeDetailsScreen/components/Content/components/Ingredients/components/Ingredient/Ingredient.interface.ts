import type { Ingredient } from "@/interfaces/RecipeDetails.interface";

export interface IngredientProps extends Omit<Ingredient, "id"> {}
