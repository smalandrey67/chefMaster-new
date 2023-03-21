import type { RecipeDetails } from "@/interfaces/RecipeDetails.interface";

type DetailsImageData = Pick<RecipeDetails, "image">;

export interface DetailsImageProps {
	detailsImageData: DetailsImageData;
}
