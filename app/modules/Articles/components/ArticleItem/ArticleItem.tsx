import Image from "next/image";
import { useRouter } from "next/router";

import { Title } from "@/ui";
import type { ArticleItemProps } from "./ArticleItem.interface";

import styles from "./ArticleItem.module.scss";

export function ArticleItem({ image, title, authorImage, authorName, likes, _id }: ArticleItemProps): JSX.Element {
	const router = useRouter();

	const navigateToArticleDetails = (): void => {
		// router.push(`/articles/${_id}`);
		console.log(_id);
		router.push("/articles/640a4cd5d48610a9ea9ed6c3");
	};

	return (
		<article className={styles.article} onClick={navigateToArticleDetails}>
			<Image src={image} className={styles.articleImage} width={100} height={100} alt={title} />
			<div className={styles.articleInfo}>
				<Title className={styles.articleTitle} variant="small">
					{title}
				</Title>
				<div>{likes}</div>
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
