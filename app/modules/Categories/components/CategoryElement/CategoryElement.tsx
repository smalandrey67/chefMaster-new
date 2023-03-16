import Image from "next/image";
import Link from "next/link";

import type { CategoryElementProps } from "./CategoryElement.interface";

import styles from "./CategoryElement.module.scss";

export function CategoryElement({ image, label }: CategoryElementProps): JSX.Element {
	return (
		<li className={styles.category}>
			<Link href={`/category/${label}`} className={styles.categoryLink}>
				<Image src={image} className={styles.categoryImage} width={60} height={60} alt={label} />
				<span className={styles.categoryLabel}>{label}</span>
			</Link>
		</li>
	);
}
