import { ArticleDetailsScreen } from "@/screens/ArticleDetailsScreen/ArticleDetailsScreen";
import { withLayout } from "@/Layout/Layout";

import { HomeScreenService } from "@/screens/HomeScreen/HomeScreen.service";

import type { ArticleDetailsScreenProps } from "@/screens/ArticleDetailsScreen/ArticleDetailsScreen.interface";
import type { GetStaticPaths, GetStaticProps } from "next";
import { ArticleDetailsScreenController } from "@/screens/ArticleDetailsScreen/ArticleDetailsScreen.controller";

interface ArticleDetailsProps extends ArticleDetailsScreenProps, Record<string, unknown> {}

function ArticleDetails(props: ArticleDetailsProps): JSX.Element {
	return <ArticleDetailsScreen {...props} />;
}

export default withLayout({
	Component: ArticleDetails,
	pageTitle: "ArticleDetails",
	pageDescription: "Savoring Global Delights: Exploring the Culinary Wonders of the World"
});

export const getStaticPaths: GetStaticPaths = async () => {
	const popularArticles = await HomeScreenService.getPopularArticles();
	const paths = popularArticles.map((path) => ({ params: { id: path._id } }));

	return {
		paths,
		fallback: "blocking"
	};
};

export const getStaticProps: GetStaticProps<ArticleDetailsScreenProps> = async (context) => {
	try {
		return await ArticleDetailsScreenController.getArticleDetails(context);
	} catch (error) {
		return {
			notFound: true
		};
	}
};
