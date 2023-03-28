import { Title } from "chefmaster-ui";

import { AuthForm } from "@/modules/AuthForm";
import type { AuthScreenProps } from "./AuthScreen.interface";

import styles from "./AuthScreen.module.scss";

export function AuthScreen({ screenTitle }: AuthScreenProps): JSX.Element {
	return (
		<section className={styles.auth}>
			<Title className={styles.authTitle} variant="big">
				{screenTitle}
			</Title>
			<AuthForm />
		</section>
	);
}
