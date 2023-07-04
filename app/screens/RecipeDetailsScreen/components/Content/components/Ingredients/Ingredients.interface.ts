import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";

type Ingredients = Pick<RecipeDetails, "ingredients">;

export interface IngredientsProps extends Ingredients {}
