import { motion } from "framer-motion";

import { biasFromLeftToRight } from "@/constants/motion.constant";
import type { DescriptionProps } from "./Description.interface";

import styles from "./Description.module.scss";

export function Description({ description }: DescriptionProps): JSX.Element {
	return (
		<motion.div className={styles.instruction} variants={biasFromLeftToRight} initial="hidden" animate="visible">
			<h4 className={styles.instructionTitle}>Description</h4>
			<p className={styles.instructionText}>{description}</p>
		</motion.div>
	);
}
