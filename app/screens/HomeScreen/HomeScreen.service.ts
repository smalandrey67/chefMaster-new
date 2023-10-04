import { $api } from "@/config/axios.config";

import type { Recipe } from "@/interfaces/Recipe.interface";
import type { Article } from "@/interfaces/Article.interface";
import type { AxiosRequestConfig } from "axios";

export const HomeScreenService = {
	async getPopularRecipes(params?: AxiosRequestConfig["params"]): Promise<Recipe[]> {
		const { data: popularRecipes } = await $api.get<Recipe[]>("/recipes/popular", { params });
		return popularRecipes;
	},

	async getPopularArticles(params?: AxiosRequestConfig["params"]): Promise<Article[]> {
		const { data: popularArticles } = await $api.get<Article[]>("/articles", { params });
		return popularArticles;
	}
};
