import { MIngredient } from "./components/Ingredient/Ingredient";

import { biasFromLeftToRight } from "@/constants/motion.constant";
import type { IngredientsProps } from "./Ingredients.interface";

import styles from "./Ingredient.module.scss";

export function Ingredients({ ingredients }: IngredientsProps): JSX.Element {
	return (
		<ul className={styles.ingredients}>
			<h4 className={styles.ingredientsTitle}>Ingredients</h4>

			{Array(10)
				.fill(ingredients[0])
				.map(({ id, ...properties }, index) => (
					<MIngredient
						key={id}
						variants={biasFromLeftToRight}
						initial="hidden"
						animate="visible"
						custom={index}
						{...properties}
					/>
				))}
		</ul>
	);
}
