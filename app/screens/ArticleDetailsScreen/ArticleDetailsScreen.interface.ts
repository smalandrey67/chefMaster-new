import type { Article } from "@/interfaces/Article.interface";

export interface ArticleDetails extends Article {
	description: string;
}

export interface ArticleDetailsScreenProps {
	articleDetails: ArticleDetails;
}
