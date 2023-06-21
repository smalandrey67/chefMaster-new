import { Ingredient } from "./components/Ingredient/Ingredient";

import type { IngredientsProps } from "./Ingredients.interface";

import styles from "./Ingredient.module.scss";

export function Ingredients({ ingredients }: IngredientsProps): JSX.Element {
	return (
		<div className={styles.ingredients}>
			<h4 className={styles.ingredientsTitle}>Ingredients</h4>

			{Array(10)
				.fill(ingredients[0])
				.map(({ id, ...properties }) => (
					<Ingredient key={id} {...properties} />
				))}
		</div>
	);
}
