// import { ArticleDetailsScreenService } from "./ArticleDetailsScreen.service";

import type { ParsedUrlQuery } from "querystring";
import type { GetStaticPropsContext, PreviewData } from "next";

export const ArticleDetailsScreenController = {
	async getArticleDetails(context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) {
		const articleId = context.params?.id;

		if (!articleId || Array.isArray(articleId)) {
			throw new Error("Error in providing article id");
		}

		// const articleDetails = await ArticleDetailsScreenService.getArticleDetails(articleId);

		return {
			props: { articleDetails: [] }
		};
	}
};
