import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";

type ContentData = Pick<RecipeDetails, "description" | "ingredients" | "cooking">;

export interface ContentProps extends ContentData {}
