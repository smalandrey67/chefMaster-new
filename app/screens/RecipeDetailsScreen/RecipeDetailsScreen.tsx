import { DetailsImage } from "./components/DetailsImage/DetailsImage";
import { About } from "./components/About/About";
import { Content } from "./components/Content/Content";

import type { RecipeDetailsScreenProps } from "./RecipeDetailsScreen.interface";

import styles from "./RecipeDetailsScreen.module.scss";

export function RecipeDetailsScreen({ recipeDetails }: RecipeDetailsScreenProps): JSX.Element {
	return (
		<section className={styles.details}>
			<div className={styles.detailsBody}>
				<DetailsImage {...recipeDetails} />
				<About {...recipeDetails} />
				<Content {...recipeDetails} />
			</div>
		</section>
	);
}
