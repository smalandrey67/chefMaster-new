import { DetailsImage } from "./components/DetailsImage/DetailsImage";
import { About } from "./components/About/About";

import type { RecipeDetailsScreenProps } from "./RecipeDetailsScreen.interface";

import styles from "./RecipeDetailsScreen.module.scss";
import { Content } from "./components/Content/Content";

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
				<Content
					contentData={{
						instruction: recipeDetails.instruction,
						ingredients: recipeDetails.ingredients,
						cooking: recipeDetails.cooking
					}}
				/>
			</div>
		</section>
	);
}
