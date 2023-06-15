import styles from "./Instruction.module.scss";

export function Instruction(): JSX.Element {
	return (
		<div className={styles.instruction}>
			<h4 className={styles.instructionTitle}>Instruction</h4>
			<p className={styles.instructionText}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, sequi. Lorem ipsum, dolor sit amet consectetur
				adipisicing elit. Error, sequi.
			</p>
		</div>
	);
}
