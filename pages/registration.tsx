import { AuthScreen } from "@/screens/AuthScreen/AuthScreen";
import { withLayout } from "@/Layout/Layout";

function Registration(): JSX.Element {
	return <AuthScreen authScreenTitle="Registration" authType="registration" />;
}

export default withLayout({
	Component: Registration,
	pageTitle: "Registration"
});
