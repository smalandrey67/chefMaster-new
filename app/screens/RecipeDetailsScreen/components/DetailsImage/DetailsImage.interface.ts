import type { RecipeDetails } from "../../RecipeDetailsScreen.interface";

type DetailsImage = Pick<RecipeDetails, "image">;

export interface DetailsImageProps extends DetailsImage {}
