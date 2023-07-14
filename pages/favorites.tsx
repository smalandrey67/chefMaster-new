import dynamic from "next/dynamic";
import { withLayout } from "@/Layout/Layout";

const FavoritesScreen = dynamic(() => import("@/screens/FavoritesScreen/FavoritesScreen").then((mod) => mod.FavoritesScreen), {
	ssr: false
});

function Favorites(): JSX.Element {
	return <FavoritesScreen />;
}

export default withLayout({
	Component: Favorites,
	pageTitle: "Favorites"
});
