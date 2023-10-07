import Image from "next/image";

import { Controls } from "./components/Controls/Controls";
import { Recommendations } from "./components/Recommendations/Recommendations";

import type { ArticleCardProps } from "./ArticleCard.interface";

import styles from "./ArticleCard.module.scss";

export function ArticleCard({ image, title, authorImage, authorName, likes }: ArticleCardProps): JSX.Element {
	return (
		<div className={styles.articleCard}>
			<div className={styles.articleCardImageWrapper}>
				<Image src={image} className={styles.articleCardImage} fill alt={title} />
			</div>
			<div className={styles.articleCardAuthor}>
				<Image src={authorImage} className={styles.articleCardAuthorImage} width={50} height={50} alt={authorName} />
				<h3 className={styles.articleCardAuthorName}>{authorName}</h3>
			</div>
			<Recommendations image={image} />
			<Controls likes={likes} />
		</div>
	);
}
