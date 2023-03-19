import type { RecipeInformationProps } from "./RecipeInformation.interface";

import styles from "./RecipeInformation.module.scss";

export function RecipeInformation({ cookTime, rating, cookLevel }: RecipeInformationProps): JSX.Element {
	return (
		<div className={styles.information}>
			{cookTime}
			{rating}
			{cookLevel}
		</div>
	);
}
