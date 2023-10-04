import { $api } from "@/config/axios.config";

import type { ArticleDetails } from "./ArticleDetailsScreen.interface";

export const ArticleDetailsScreenService = {
	async getArticleDetails(articleId: string): Promise<ArticleDetails> {
		const { data: articleDetails } = await $api.get<ArticleDetails>(`/articles/details/${articleId}`);
		return articleDetails;
	}
};
