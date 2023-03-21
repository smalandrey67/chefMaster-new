import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";

export type TabsData = Pick<RecipeDetails, "instruction" | "ingredients" | "cooking">;

export interface TabsProps {
	tabsData: TabsData;
}
