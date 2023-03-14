import type { RecipesByCategoryScreenProps } from "./RecipesByCategoryScreen.interface";

import styles from "./RecipesByCategoryScreen.module.scss";

export function RecipesByCategoryScreen({ recipes }: RecipesByCategoryScreenProps): JSX.Element {
	return <div className={styles.wrapper}>{recipes.join(" ")}</div>;
}
