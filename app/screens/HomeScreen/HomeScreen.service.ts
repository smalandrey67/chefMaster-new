import { api } from "@/configs/ky.config";

import type { Recipe } from "@/interfaces/Recipe.interface";
import type { Article } from "@/interfaces/Article.interface";
import type { SearchParamsOption } from "ky";

export const HomeScreenService = {
	async getAllRecipes(): Promise<Recipe[]> {
		const allRecipes: Recipe[] = await api.get("recipes").json();
		return allRecipes;
	},

	async getArticles(queryParams?: SearchParamsOption): Promise<Article[]> {
		const articles: Article[] = await api.get("articles", { searchParams: queryParams }).json();
		return articles;
	}
};
