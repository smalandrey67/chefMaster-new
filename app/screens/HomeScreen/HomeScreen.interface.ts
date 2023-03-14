import type { Recipe } from "@/interfaces/Recipe.interface";
import type { Article } from "@/interfaces/Article.interface";

export interface HomeScreenProps {
	recipes?: Recipe[];
	articles?: Article[];
	error?: string;
}
