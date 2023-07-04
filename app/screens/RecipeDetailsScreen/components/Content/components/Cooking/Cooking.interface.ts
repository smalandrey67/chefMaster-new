import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";

type Cooking = Pick<RecipeDetails, "cooking">;

export interface CookingProps extends Cooking {}
