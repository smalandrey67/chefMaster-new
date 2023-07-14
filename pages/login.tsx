import { AuthScreen } from "@/screens/AuthScreen/AuthScreen";
import { withLayout } from "@/Layout/Layout";

function Login(): JSX.Element {
	return <AuthScreen authScreenTitle="Login" authType="login" />;
}

export default withLayout({
	Component: Login,
	pageTitle: "Login"
});
