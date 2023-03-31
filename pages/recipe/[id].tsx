import { RecipeDetailsScreen } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen";
import { withLayout } from "@/Layout/Layout";

import { RecipeDetailsScreenController } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen.controller";
import { HomeScreenService } from "@/screens/HomeScreen/HomeScreen.service";

import type { RecipeDetailsScreenProps } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen.interface";
import type { GetStaticPaths, GetStaticProps } from "next";

interface RecipeDetailsProps extends RecipeDetailsScreenProps, Record<string, unknown> {}

function RecipeDetails(props: RecipeDetailsProps): JSX.Element {
	return <RecipeDetailsScreen {...props} />;
}

export default withLayout({
	Component: RecipeDetails,
	pageTitle: "Recipe Details",
	pageDescription: "Any additional notes or tips to help make the dish a success"
});

export const getStaticPaths: GetStaticPaths = async () => {
	const popularRecipes = await HomeScreenService.getPopularRecipes();
	const paths = popularRecipes.map((path) => ({ params: { id: path._id } }));

	return {
		paths,
		fallback: "blocking"
	};
};

export const getStaticProps: GetStaticProps<RecipeDetailsScreenProps> = async (context) => {
	try {
		return await RecipeDetailsScreenController.getRecipeDetails(context);
	} catch (error) {
		return {
			notFound: true
		};
	}
};
