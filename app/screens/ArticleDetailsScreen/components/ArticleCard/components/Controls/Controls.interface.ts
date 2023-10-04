import type { ArticleDetails } from "../../../../ArticleDetailsScreen.interface";

type Controls = Pick<ArticleDetails, "likes">;

export interface ControlsProps extends Controls {}
