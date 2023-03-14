import { ErrorContainer } from "@/containers/ErrorContainer/ErrorContainer";
import { Recipes } from "@/modules/Recipes";

import type { RecipesByCategoryScreenProps } from "./RecipesByCategoryScreen.interface";

export function RecipesByCategoryScreen({ recipesByCategory, error }: RecipesByCategoryScreenProps): JSX.Element {
	return (
		<ErrorContainer error={error}>
			<Recipes recipes={recipesByCategory} moduleTitle="Recipes" />
		</ErrorContainer>
	);
}
