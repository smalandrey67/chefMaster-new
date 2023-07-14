import type { RecipeDetails } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen.interface";

type Description = Pick<RecipeDetails, "description">;

export interface DescriptionProps extends Description {}
