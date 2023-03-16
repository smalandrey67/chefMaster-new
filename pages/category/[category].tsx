import { RecipesByCategoryScreen } from "@/screens/RecipesByCategoryScreen/RecipesByCategoryScreen";
import { withLayout } from "@/Layout/Layout";

import { RecipesByCategoryController } from "@/screens/RecipesByCategoryScreen/RecipesByCategoryScreen.controller";

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
	const categories = ["burgers", "drinks", "salads", "desserts", "pizza", "seafood"];
	const paths = categories.map((path) => ({ params: { category: path } }));

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<RecipesByCategoryScreenProps> = async (context) => {
	return RecipesByCategoryController.getRecipesByCategory(context);
};
