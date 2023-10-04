import type { DescriptionProps } from "./Description.interface";

import styles from "./Description.module.scss";

export function Description({ title, description }: DescriptionProps): JSX.Element {
	return (
		<div className={styles.description}>
			<h3 className={styles.descriptionTitle}>{title}</h3>
			{description}
		</div>
	);
}
