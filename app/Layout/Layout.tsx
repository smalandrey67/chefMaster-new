import { Meta } from "./components/Meta/Meta";
import { PageContainer } from "@/containers/PageContainer/PageContainer";

import { Header } from "@/modules/Header";
import { Navbar } from "@/modules/Navbar";

import { useCheckIsAuthorized } from "@/hooks/useCheckIsAuthorized";
import { useLoadAppView } from "@/hooks/useLoadAppView";
import { useChangeMainView } from "@/hooks/useChangeMainView";

import type { LayoutProps, WithLayoutProps } from "./Layout.interface";

import styles from "./Layout.module.scss";

function Layout({ children, ...metaProps }: LayoutProps): JSX.Element {
	useCheckIsAuthorized();
	useLoadAppView();
	useChangeMainView();

	return (
		<>
			<Meta {...metaProps} />
			<div className={styles.wrapperApp}>
				<Header />
				<main className={styles.main}>
					<PageContainer>
						<div className={styles.wrapperLayout}>
							<div className={styles.wrapperLayoutMain}>{children}</div>
							<Navbar />
						</div>
					</PageContainer>
				</main>
			</div>
		</>
	);
}

export const withLayout = <T extends Record<string, unknown>>({
	Component,
	pageTitle,
	pageDescription
}: WithLayoutProps<T>): ((props: T) => JSX.Element) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout pageTitle={pageTitle} pageDescription={pageDescription}>
				<Component {...props} />
			</Layout>
		);
	};
};
