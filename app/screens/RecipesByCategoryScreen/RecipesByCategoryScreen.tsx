import { Recipes } from "@/modules/Recipes";

import type { RecipesByCategoryScreenProps } from "./RecipesByCategoryScreen.interface";

export function RecipesByCategoryScreen({ recipesByCategory, selectedCategory }: RecipesByCategoryScreenProps): JSX.Element {
	return <Recipes recipes={recipesByCategory} moduleTitle={selectedCategory} />;
}
