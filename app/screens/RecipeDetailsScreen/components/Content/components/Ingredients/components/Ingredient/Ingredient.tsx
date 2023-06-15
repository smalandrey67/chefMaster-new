import Image from "next/image";

import type { IngredientProps } from "./Ingredient.interface";

import styles from "./Ingredient.module.scss";

export function Ingredient({ name, image, unit, amount }: IngredientProps): JSX.Element {
	return (
		<div className={styles.ingredient}>
			<div className={styles.ingredientView}>
				<div className={styles.ingredientImageWrapper}>
					<Image
						src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
						className={styles.ingredientImage}
						fill
						alt={name}
					/>
				</div>

				<span className={styles.ingredientName}>{name}</span>
			</div>
			<div className={styles.ingredientInfo}>
				{amount} {unit}
			</div>
		</div>
	);
}
