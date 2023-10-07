import { RecipeCard, FancyLink, Title } from "@/ui";

import { TbArrowNarrowRight } from "react-icons/tb";
import type { RecipesProps } from "./Recipes.interface";

import styles from "./Recipes.module.scss";

export function Recipes({ recipes, moduleTitle = "recipes", isSeeAll = true }: RecipesProps): JSX.Element {
	return (
		<section className={styles.recipes}>
			<div className={styles.recipesHeader}>
				<Title className={styles.recipesTitle} variant="big">
					{moduleTitle}
				</Title>
				{isSeeAll && <FancyLink href="/recipes" Icon={TbArrowNarrowRight} iconSize={20} iconColor="#212121" />}
			</div>
			<div className={styles.recipesWrapper}>
				{recipes.map((recipe) => (
					<RecipeCard key={recipe._id} {...recipe} />
				))}
			</div>
		</section>
	);
}
