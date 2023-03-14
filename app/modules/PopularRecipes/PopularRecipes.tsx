import { RecipeCard } from "@/common/RecipeCard/RecipeCard";
import { Title } from "chefmaster-ui";

import type { RecipesProps } from "./PopularRecipes.interface";

import styles from "./PopularRecipes.module.scss";

export function PopularRecipes({ popularRecipes }: RecipesProps): JSX.Element {
	return (
		<section className={styles.recipes}>
			<Title className={styles.recipesTitle} variant="big">
				Popular
			</Title>
			<div className={styles.recipesWrapper}>
				{popularRecipes && popularRecipes.map((recipe) => <RecipeCard key={recipe._id} {...recipe} />)}
			</div>
		</section>
	);
}
