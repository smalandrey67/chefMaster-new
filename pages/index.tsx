import { useEffect, useRef } from "react";

import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";
import { withLayout } from "@/Layout/Layout";

import { HomeScreenController } from "@/screens/HomeScreen/HomeScreen.controller";
import { useAppDispatch } from "@/hooks/useRedux";
import { authThunk } from "@/modules/AuthForm";

import type { GetServerSideProps } from "next";
import type { HomeScreenProps } from "@/screens/HomeScreen/HomeScreen.interface";

interface HomeProps extends HomeScreenProps, Record<string, unknown> {}

function Home(props: HomeProps): JSX.Element {
	const dispatch = useAppDispatch();
	const loadRef = useRef(false);

	useEffect(() => {
		if (localStorage.getItem("accessToken") && !loadRef.current) {
			dispatch(authThunk.checkIsAuthorized());
			loadRef.current = true;
		}
	}, [dispatch]);

	return <HomeScreen {...props} />;
}

export default withLayout({
	Component: Home,
	pageTitle: "chefMaster",
	pageDescription: "Discover a world of mouth-watering recipes on our site"
});

export const getServerSideProps: GetServerSideProps<HomeScreenProps> = async () => {
	try {
		return await HomeScreenController.getRequestModules();
	} catch (error) {
		return {
			notFound: true
		};
	}
};
