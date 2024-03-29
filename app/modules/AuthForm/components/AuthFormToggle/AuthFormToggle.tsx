import { FancyLink } from "@/ui";

import type { AuthFormToggleProps } from "./AuthFormToggle.interface";

import styles from "./AuthFormToggle.module.scss";

export function AuthFormToggle({ authType }: AuthFormToggleProps): JSX.Element {
	return (
		<div className={styles.subDetails}>
			{
				{
					registration: (
						<FancyLink className={styles.subDetailsLink} href="/login">
							Already have an account?
						</FancyLink>
					),
					login: (
						<FancyLink className={styles.subDetailsLink} href="/registration">
							Don&apos;t have an account?
						</FancyLink>
					)
				}[authType]
			}
		</div>
	);
}
