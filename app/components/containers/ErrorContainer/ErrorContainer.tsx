import type { ErrorContainerProps } from "./ErrorContainer.interface";

import styles from "./ErrorContainer.module.scss";

export function ErrorContainer({ error, children }: ErrorContainerProps): JSX.Element {
	if (error) {
		return <div className={styles.error}>Server Error</div>;
	}

	return <>{children}</>;
}
