import { RecipeDetailsScreenService } from "./RecipeDetailsScreen.service";

import type { GetStaticPropsContext, PreviewData } from "next";
import type { ParsedUrlQuery } from "querystring";

export const RecipeDetailsScreenController = {
	async getRecipeDetails(context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) {
		const recipeId = context.params?.id;

		if (!recipeId || Array.isArray(recipeId)) {
			throw new Error("Error in providing recipe id");
		}

		const recipeDetails = await RecipeDetailsScreenService.getRecipeDetails(recipeId);

		return {
			props: { recipeDetails }
		};
	}
};
