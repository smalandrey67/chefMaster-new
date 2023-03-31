import Link from "next/link";
import { FancyLink } from "chefmaster-ui";

import type { SubDetailsProps } from "./SubDetails.interface";

import styles from "./SubDetails.module.scss";

export function SubDetails({ authType }: SubDetailsProps): JSX.Element {
	const subDetails = {
		registration: (
			<FancyLink className={styles.subDetailsLink} Link={Link} href="/login">
				Already have an account?
			</FancyLink>
		),
		login: (
			<FancyLink className={styles.subDetailsLink} Link={Link} href="/registration">
				Don&apos;t have an account?
			</FancyLink>
		)
	};

	return <div className={styles.subDetails}>{subDetails[authType]}</div>;
}
