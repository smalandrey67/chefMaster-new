import { Categories } from "@/modules/Categories";
import { PersonalStatistic } from "@/modules/PersonalStatistic";
import { PopularRecipes } from "@/modules/PopularRecipes/PopularRecipes";
import { Articles } from "@/modules/Articles";
import { ErrorContainer } from "@/containers/ErrorContainer/ErrorContainer";

import type { HomeScreenProps } from "./HomeScreen.interface";

import styles from "./HomeScreen.module.scss";

export function HomeScreen({ popularRecipes, articles, error }: HomeScreenProps): JSX.Element {
	return (
		<ErrorContainer error={error}>
			<div className={styles.home}>
				<Categories />
				<PersonalStatistic />
				<PopularRecipes popularRecipes={popularRecipes} />
				<Articles articles={articles} />
			</div>
		</ErrorContainer>
	);
}
