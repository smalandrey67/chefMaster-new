import { Poppins } from "@next/font/google";
import { Provider } from "react-redux";

import { setupStore } from "@/store/store";

import type { AppProps } from "next/app";

import "react-toastify/dist/ReactToastify.css";
import "chefmaster-ui/dist/styles/main.css";
import "@/styles/globals.scss";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "800"]
});

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<style jsx global>
				{`
					:root {
						--poppins-font: ${poppins.style.fontFamily};
					}
				`}
			</style>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default MyApp;
