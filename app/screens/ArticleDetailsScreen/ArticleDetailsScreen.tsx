import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import { Description } from "./components/Description/Description";

import type { ArticleDetailsScreenProps } from "./ArticleDetailsScreen.interface";

import styles from "./ArticleDetailsScreen.module.scss";

export function ArticleDetailsScreen({ articleDetails }: ArticleDetailsScreenProps): JSX.Element {
	return (
		<div className={styles.details}>
			<ArticleCard {...articleDetails} />
			<Description {...articleDetails} />
		</div>
	);
}
