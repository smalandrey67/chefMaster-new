import Image from "next/image";

import type { DetailsImageProps } from "./DetailsImage.interface";

import styles from "./DetailsImage.module.scss";

export function DetailsImage({ detailsImageData }: DetailsImageProps): JSX.Element {
	return (
		<div className={styles.imageWrapper}>
			<Image src={detailsImageData.image} className={styles.image} fill={true} alt="recipe image" />
		</div>
	);
}
