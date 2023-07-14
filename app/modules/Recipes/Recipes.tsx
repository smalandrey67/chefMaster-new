import Link from "next/link";

import { RecipeCard } from "@/common/RecipeCard/RecipeCard";
import { FancyLink, Title } from "chefmaster-ui";

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
				{isSeeAll && <FancyLink Link={Link} href="/recipes" Icon={TbArrowNarrowRight} iconSize={20} iconColor="var(--dark-10)" />}
			</div>
			<div className={styles.recipesWrapper}>
				{recipes.map((recipe) => (
					<RecipeCard key={recipe._id} {...recipe} />
				))}
			</div>
		</section>
	);
}
