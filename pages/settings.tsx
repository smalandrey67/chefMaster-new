import { SettingsScreen } from "@/screens/SettingsScreen/SettingsScreen";
import { withLayout } from "@/Layout/Layout";

function Settings(): JSX.Element {
	return <SettingsScreen />;
}

export default withLayout({
	Component: Settings,
	pageTitle: "Settings"
});
