import { AuthScreen } from "@/screens/AuthScreen/AuthScreen";
import { withLayout } from "@/Layout/Layout";

function Registration(): JSX.Element {
	return <AuthScreen screenTitle="Registration" />;
}

export default withLayout({
	Component: Registration,
	pageTitle: "Registration"
});
