import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";
import { withLayout } from "@/Layout/Layout";

import { HomeScreenController } from "@/screens/HomeScreen/HomeScreen.controller";

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
		return await HomeScreenController.getModuleRequests();
	} catch (error) {
		return {
			notFound: true
		};
	}
};
