import { ErrorContainer } from "@/containers/ErrorContainer/ErrorContainer";

import type { RecipeDetailsScreenProps } from "./RecipeDetailsScreen.interface";

export function RecipeDetailsScreen({ recipeDetails, error }: RecipeDetailsScreenProps): JSX.Element {
	return (
		<ErrorContainer error={error}>
			<div>{JSON.stringify(recipeDetails)}</div>
		</ErrorContainer>
	);
}
