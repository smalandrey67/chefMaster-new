import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";

type ContentData = Pick<RecipeDetails, "instruction" | "ingredients" | "cooking">;

export interface ContentProps {
	contentData: ContentData;
}
