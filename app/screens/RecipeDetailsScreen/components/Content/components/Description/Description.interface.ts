import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";

type Description = Pick<RecipeDetails, "description">;

export interface DescriptionProps extends Description {}
