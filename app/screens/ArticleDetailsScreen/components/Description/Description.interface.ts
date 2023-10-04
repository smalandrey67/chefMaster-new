import type { ArticleDetails } from "../../ArticleDetailsScreen.interface";

type Description = Pick<ArticleDetails, "title" | "description">;

export interface DescriptionProps extends Description {}
