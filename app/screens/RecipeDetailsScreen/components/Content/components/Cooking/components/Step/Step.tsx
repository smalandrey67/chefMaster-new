import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { INGREDIENT_IMAGE } from "@/constants/images.constants";
import { biasFromLeftToRight, growthHeight } from "@/constants/motion.constant";

import { BiChevronDown } from "react-icons/bi";
import type { StepProps } from "./Step.interface";

import styles from "./Step.module.scss";

export function Step({ ingredients, stepCount, step }: StepProps): JSX.Element {
	const [isStepOpen, setIsStepOpen] = useState<boolean>(stepCount === 1 ? true : false);

	const openStep = (): void => {
		setIsStepOpen((prevIsStepOpen) => !prevIsStepOpen);
	};

	return (
		<motion.li
			className={styles.step}
			onClick={openStep}
			variants={biasFromLeftToRight}
			initial="hidden"
			animate="visible"
			custom={stepCount}
		>
			<div className={styles.stepWrapper}>
				<div className={styles.stepCount}>step {stepCount}</div>
				<button className={clsx(styles.stepArrow, { [styles.stepArrowOpen]: isStepOpen })}>
					<BiChevronDown size={23} />
				</button>
			</div>
			<AnimatePresence mode="wait">
				{isStepOpen && (
					<motion.div className={styles.stepContent} variants={growthHeight} initial="hidden" animate="visible" exit="exit">
						<div className={styles.stepContentIngredients}>
							{ingredients.map((ingredient) => (
								<div key={ingredient.id} className={styles.stepContentIngredient}>
									<Image
										src={`${INGREDIENT_IMAGE}${ingredient.image}`}
										className={styles.stepContentIngredientImage}
										fill
										alt={ingredient.name}
									/>
								</div>
							))}
						</div>
						<p className={styles.stepContentText}>{step}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.li>
	);
}
