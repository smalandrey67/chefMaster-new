import type { RecipeDetails } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen.interface";

type Ingredients = Pick<RecipeDetails, "ingredients">;

export interface IngredientsProps extends Ingredients {}
