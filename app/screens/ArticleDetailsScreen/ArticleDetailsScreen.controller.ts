import { ArticleDetailsScreenService } from "./ArticleDetailsScreen.service";

import type { GetStaticPropsContext, PreviewData } from "next";
import type { ParsedUrlQuery } from "querystring";

export const ArticleDetailsScreenController = {
	async getArticleDetails(context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) {
		const articleId = context.params?.id;

		if (!articleId || Array.isArray(articleId)) {
			throw new Error("Error in providing article id");
		}

		const articleDetails = await ArticleDetailsScreenService.getArticleDetails(articleId);

		return {
			props: { articleDetails }
		};
	}
};
