import type { ArticleDetails } from "../../ArticleDetailsScreen.interface";

type ArticleCard = Omit<ArticleDetails, "description">;

export interface ArticleCardProps extends ArticleCard {}
