import { RecipesByCategoryScreenService } from "./RecipesByCategoryScreen.service";

import type { GetStaticPropsContext, PreviewData } from "next";
import type { ParsedUrlQuery } from "querystring";

export const RecipesByCategoryController = {
	async getRecipesByCategory(context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) {
		const category = context.params?.category;

		if (!category || Array.isArray(category)) {
			throw new Error("Error in providing category");
		}

		const recipesByCategory = await RecipesByCategoryScreenService.getRecipesByCategory(category);

		return {
			props: { recipesByCategory, selectedCategory: category }
		};
	}
};
