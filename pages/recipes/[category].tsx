import { withLayout } from "@/Layout/Layout";
import { RecipesByCategoryScreenService } from "@/screens/RecipesByCategoryScreen/RecipesByCategoryScreen.service";
import { RecipesByCategoryScreen } from "@/screens/RecipesByCategoryScreen/RecipesByCategoryScreen";

import type { RecipesByCategoryScreenProps } from "@/screens/RecipesByCategoryScreen/RecipesByCategoryScreen.interface";
import type { GetStaticPaths, GetStaticProps } from "next";

interface RecipesByCategoryProps extends RecipesByCategoryScreenProps, Record<string, unknown> {}

function RecipesByCategory(props: RecipesByCategoryProps): JSX.Element {
	return <RecipesByCategoryScreen {...props} />;
}

export default withLayout({
	Component: RecipesByCategory,
	pageTitle: "Recipes By Category",
	pageDescription: "On this page, you can find various categories of recipes"
});

export const getStaticPaths: GetStaticPaths = () => {
	const paths = ["burgers", "drinks", "salads", "desserts", "pizza", "seafood"];

	return {
		paths: paths.map((path) => ({ params: { category: path } })),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<RecipesByCategoryScreenProps> = async (context) => {
	try {
		const category = context.params?.category;

		if (!category || Array.isArray(category)) {
			throw new Error("Provide category");
		}

		const recipesByCategory = await RecipesByCategoryScreenService.getRecipesByCategory(category);

		return {
			props: { recipesByCategory }
		};
	} catch (error) {
		return {
			props: { error: (error as Error).message }
		};
	}
};
