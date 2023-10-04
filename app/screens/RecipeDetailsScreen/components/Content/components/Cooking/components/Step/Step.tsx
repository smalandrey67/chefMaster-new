import Image from "next/image";
import clsx from "clsx";
import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { INGREDIENT_IMAGE } from "@/constants/images.constants";
import { growthHeight } from "@/constants/motion.constant";

import { BiChevronDown } from "react-icons/bi";
import type { StepProps } from "./Step.interface";

import styles from "./Step.module.scss";

const Step = forwardRef<HTMLLIElement, StepProps>(({ ingredients, stepCount, step }, ref) => {
	const [isStepOpen, setIsStepOpen] = useState<boolean>(stepCount === 1);

	const openStep = (): void => {
		setIsStepOpen((prevIsStepOpen) => !prevIsStepOpen);
	};

	return (
		<li className={styles.step} onClick={openStep} ref={ref}>
			<div className={styles.stepWrapper}>
				<div className={styles.stepCount}>step {stepCount}</div>
				<button className={clsx(styles.stepArrow, { [styles.stepArrowOpen || ""]: isStepOpen })}>
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
		</li>
	);
});

Step.displayName = "Step";

export const MStep = motion(Step);
