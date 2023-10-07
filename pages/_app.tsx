import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";

import { Poppins } from "@next/font/google";
import { Provider } from "react-redux";

import { setupStore } from "@/store/store";

import type { AppProps } from "next/app";

import "react-toastify/dist/ReactToastify.css";
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
				<NextNProgress color="#ffc30e" />
				<Component {...pageProps} />
				<ToastContainer role="alert" />
			</Provider>
		</>
	);
}

export default MyApp;
