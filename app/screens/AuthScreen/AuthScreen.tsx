import { Title } from "@/ui";

import { AuthForm } from "@/modules/AuthForm";
import type { AuthScreenProps } from "./AuthScreen.interface";

import styles from "./AuthScreen.module.scss";

export function AuthScreen({ authScreenTitle, authType }: AuthScreenProps): JSX.Element {
	return (
		<section className={styles.auth}>
			<Title className={styles.authTitle} variant="big">
				{authScreenTitle}
			</Title>
			<AuthForm authType={authType} />
		</section>
	);
}
