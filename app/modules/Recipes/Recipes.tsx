import { RecipeCard } from "@/common/RecipeCard/RecipeCard";
import { Title } from "chefmaster-ui";

import type { RecipesProps } from "./Recipes.interface";

import styles from "./Recipes.module.scss";

export function Recipes({ recipes, moduleTitle = "recipes" }: RecipesProps): JSX.Element {
	return (
		<section className={styles.recipes}>
			<Title className={styles.recipesTitle} variant="big">
				{moduleTitle}
			</Title>
			<div className={styles.recipesWrapper}>
				{recipes && recipes.map((recipe) => <RecipeCard key={recipe._id} {...recipe} />)}
			</div>
		</section>
	);
}
