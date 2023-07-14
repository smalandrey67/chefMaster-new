import type { RecipeDetails } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen.interface";

type Cooking = Pick<RecipeDetails, "cooking">;

export interface CookingProps extends Cooking {}
