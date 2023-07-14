import Image from "next/image";

import { Title } from "chefmaster-ui";
import type { ArticleItemProps } from "./ArticleItem.interface";

import styles from "./ArticleItem.module.scss";

export function ArticleItem({ image, title, authorImage, authorName, _id }: ArticleItemProps): JSX.Element {
	return (
		<article className={styles.article} onClick={() => console.log(_id)}>
			<Image src={image} className={styles.articleImage} width={100} height={100} alt={title} />
			<div className={styles.articleInfo}>
				<Title className={styles.articleTitle} variant="small">
					Black Friday deal: Free salmon steaks
				</Title>

				<div className={styles.articleAuthor}>
					<div className={styles.articleAuthorImageWrapper}>
						<Image src={authorImage} className={styles.articleAuthorImage} fill alt="author image" />
					</div>
					<div className={styles.articleAuthorName}>{authorName}</div>
				</div>
			</div>
		</article>
	);
}
