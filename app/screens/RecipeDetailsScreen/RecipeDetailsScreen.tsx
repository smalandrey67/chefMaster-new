import { DetailsImage } from "./components/DetailsImage/DetailsImage";
import { About } from "./components/About/About";
import { Tabs } from "./components/Tabs/Tabs";

import type { RecipeDetailsScreenProps } from "./RecipeDetailsScreen.interface";

import styles from "./RecipeDetailsScreen.module.scss";

export function RecipeDetailsScreen({ recipeDetails }: RecipeDetailsScreenProps): JSX.Element {
	return (
		<section className={styles.details}>
			<div className={styles.detailsBody}>
				<DetailsImage
					detailsImageData={{
						image: recipeDetails.image
					}}
				/>
				<About
					aboutData={{
						title: recipeDetails.title,
						cookTime: recipeDetails.cookTime,
						rating: recipeDetails.rating,
						cookLevel: recipeDetails.cookLevel
					}}
				/>
				<Tabs
					tabsData={{
						instruction: recipeDetails.instruction,
						ingredients: recipeDetails.ingredients,
						cooking: recipeDetails.cooking
					}}
				/>
			</div>
		</section>
	);
}
