import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";
import { HomeScreenService } from "@/screens/HomeScreen/HomeScreen.service";
import { withLayout } from "@/Layout/Layout";

import type { GetServerSideProps } from "next";
import type { HomeScreenProps } from "@/screens/HomeScreen/HomeScreen.interface";

interface HomeProps extends HomeScreenProps, Record<string, unknown> {}

function Home(props: HomeProps): JSX.Element {
	return <HomeScreen {...props} />;
}

export default withLayout({
	Component: Home,
	pageTitle: "chefMaster",
	pageDescription: "Discover a world of mouth-watering recipes on our site"
});

export const getServerSideProps: GetServerSideProps<HomeScreenProps> = async () => {
	try {
		const [recipes, articles] = await Promise.all([
			HomeScreenService.getAllRecipes(),
			HomeScreenService.getArticles({ _limit: 4 })
		]);

		return {
			props: { recipes, articles }
		};
	} catch (error) {
		return {
			props: { error: (error as Error).message }
		};
	}
};
