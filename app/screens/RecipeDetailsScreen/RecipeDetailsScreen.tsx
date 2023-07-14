import dynamic from "next/dynamic";

import { About } from "./components/About/About";
import { Content } from "./components/Content/Content";
import { DetailsImage } from "./components/DetailsImage/DetailsImage";

import type { RecipeDetailsScreenProps } from "./RecipeDetailsScreen.interface";

import styles from "./RecipeDetailsScreen.module.scss";

const MakeRecipeFavorite = dynamic(() => import("@/modules/MakeRecipeFavorite").then((mod) => mod.MakeRecipeFavorite), {
	ssr: false
});

export function RecipeDetailsScreen({ recipeDetails }: RecipeDetailsScreenProps): JSX.Element {
	return (
		<section className={styles.details}>
			<div className={styles.detailsBody}>
				<MakeRecipeFavorite {...recipeDetails} />
				<DetailsImage {...recipeDetails} />
				<About {...recipeDetails} />
				<Content {...recipeDetails} />
			</div>
		</section>
	);
}
