import Image from "next/image";

import type { DetailsImageProps } from "./DetailsImage.interface";

import styles from "./DetailsImage.module.scss";

export function DetailsImage({ image }: DetailsImageProps): JSX.Element {
	return (
		<div className={styles.imageWrapper}>
			<Image src={image} className={styles.image} fill alt="recipe details image" />
		</div>
	);
}
