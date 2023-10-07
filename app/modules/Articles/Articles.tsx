import { Title } from "@/ui";
import { ArticleItem } from "./components/ArticleItem/ArticleItem";

import type { ArticlesProps } from "./Articles.interface";

import styles from "./Articles.module.scss";

export function Articles({ articles }: ArticlesProps): JSX.Element {
	return (
		<section className={styles.articles}>
			<div className={styles.articlesHeader}>
				<Title variant="big">Articles</Title>
			</div>

			<div className={styles.articlesWrapper}>
				{articles.map((article) => (
					<ArticleItem key={article._id} {...article} />
				))}
			</div>
		</section>
	);
}
