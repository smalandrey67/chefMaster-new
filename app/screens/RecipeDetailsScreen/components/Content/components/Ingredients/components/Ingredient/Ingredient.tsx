import Image from "next/image";
import { forwardRef } from "react";
import { motion } from "framer-motion";

import { INGREDIENTS_IMAGE } from "@/constants/image.constants";
import type { IngredientProps } from "./Ingredient.interface";

import styles from "./Ingredient.module.scss";

const Ingredient = forwardRef<HTMLLIElement, IngredientProps>(({ name, image, unit, amount }, ref): JSX.Element => {
	return (
		<li className={styles.ingredient} ref={ref}>
			<div className={styles.ingredientView}>
				<div className={styles.ingredientImageWrapper}>
					<Image src={`${INGREDIENTS_IMAGE}${image}`} className={styles.ingredientImage} fill alt={name} />
				</div>

				<span className={styles.ingredientName}>{name}</span>
			</div>
			<div className={styles.ingredientInfo}>
				{amount} {unit}
			</div>
		</li>
	);
});

Ingredient.displayName = "Ingredient";

export const MIngredient = motion(Ingredient);
