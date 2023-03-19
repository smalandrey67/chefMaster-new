import Image from "next/image";

import { ErrorContainer } from "@/containers/ErrorContainer/ErrorContainer";

import type { RecipeDetailsScreenProps } from "./RecipeDetailsScreen.interface";

import styles from "./RecipeDetailsScreen.module.scss";

export function RecipeDetailsScreen({ recipeDetails, error }: RecipeDetailsScreenProps): JSX.Element {
	if (!recipeDetails) return <div>Serve Error</div>;

	return (
		<ErrorContainer error={error}>
			<section className={styles.details}>
				<div className={styles.detailsBody}>
					<Image src={recipeDetails.image} className={styles.detailsImage} width={300} height={300} alt="recipe image" />
				</div>
			</section>
		</ErrorContainer>
	);
}
