import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";
import type { IconType } from "react-icons/lib";

type AboutData = Pick<RecipeDetails, "title" | "cookTime" | "rating" | "cookLevel">;

export interface AboutProps {
	aboutData: AboutData;
}

export interface Marker {
	id: string;
	Icon: IconType;
	label: string;
	iconColor: string;
	iconSize: number;
}
