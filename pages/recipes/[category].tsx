import { withLayout } from "@/Layout/Layout";
import { RecipesByCategoryScreen } from "@/screens/RecipesByCategoryScreen/RecipesByCategoryScreen";

import type { RecipesByCategoryScreenProps } from "@/screens/RecipesByCategoryScreen/RecipesByCategoryScreen.interface";
import type { GetStaticProps } from "next";

interface RecipesByCategoryProps extends RecipesByCategoryScreenProps, Record<string, unknown> {}

function RecipesByCategory({ recipes }: RecipesByCategoryProps): JSX.Element {
	return <RecipesByCategoryScreen recipes={recipes} />;
}

export default withLayout({
	Component: RecipesByCategory,
	pageTitle: "Category",
	pageDescription: "Discover a world of mouth-watering recipes on our site."
});

export const getStaticPaths = () => {
	return {
		paths: ["burger", "cola", "salad", "donuts", "pizza", "seafood"].map((path) => ({ params: { category: path } })),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		return {
			props: {
				recipes: ["recipes"]
			}
		};
	} catch (error) {
		return {
			props: { error: (error as Error).message }
		};
	}
};
