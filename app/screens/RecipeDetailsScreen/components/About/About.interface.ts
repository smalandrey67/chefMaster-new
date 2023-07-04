import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";

type AboutData = Pick<RecipeDetails, "title" | "cookTime" | "rating" | "cookLevel">;

export interface AboutProps extends AboutData {}
