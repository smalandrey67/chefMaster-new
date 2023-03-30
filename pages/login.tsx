import { AuthScreen } from "@/screens/AuthScreen/AuthScreen";
import { withLayout } from "@/Layout/Layout";

function Login(): JSX.Element {
	return <AuthScreen screenTitle="Login" authType="login" />;
}

export default withLayout({
	Component: Login,
	pageTitle: "Login"
});
