import { RecipeDetailsScreen } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen";
import { withLayout } from "@/Layout/Layout";

import { RecipeDetailsScreenController } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen.controller";

import type { RecipeDetailsScreenProps } from "@/screens/RecipeDetailsScreen/RecipeDetailsScreen.interface";
import type { GetServerSideProps } from "next";

interface RecipeDetailsProps extends RecipeDetailsScreenProps, Record<string, unknown> {}

function RecipeDetails(props: RecipeDetailsProps): JSX.Element {
	return <RecipeDetailsScreen {...props} />;
}

export default withLayout({
	Component: RecipeDetails,
	pageTitle: "Recipe Details",
	pageDescription: "Any additional notes or tips to help make the dish a success"
});

export const getServerSideProps: GetServerSideProps<RecipeDetailsScreenProps> = async (context) => {
	return RecipeDetailsScreenController.getRecipeDetails(context);
};
