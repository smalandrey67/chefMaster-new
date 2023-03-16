import { RecipeDetailsScreenService } from "./RecipeDetailsScreen.service";

import type { GetServerSidePropsContext, PreviewData } from "next";
import type { ParsedUrlQuery } from "querystring";

export const RecipeDetailsScreenController = {
	async getRecipeDetails(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
		try {
			const recipeId = context.params?.id;

			if (!recipeId || Array.isArray(recipeId)) {
				throw new Error("Error in providing recipe id");
			}

			const recipeDetails = await RecipeDetailsScreenService.getRecipeDetails(recipeId);

			return {
				props: { recipeDetails }
			};
		} catch (error) {
			return {
				props: { error: (error as Error).message }
			};
		}
	}
};
