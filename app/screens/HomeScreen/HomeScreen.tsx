import { Categories } from "@/modules/Categories";
import { PersonalStatistic } from "@/modules/PersonalStatistic";
import { Recipes } from "@/modules/Recipes/Recipes";
import { Articles } from "@/modules/Articles";
import { ErrorContainer } from "@/containers/ErrorContainer/ErrorContainer";

import type { HomeScreenProps } from "./HomeScreen.interface";

import styles from "./HomeScreen.module.scss";

export function HomeScreen({ recipes, articles, error }: HomeScreenProps): JSX.Element {
	return (
		<ErrorContainer error={error}>
			<div className={styles.home}>
				<Categories />
				<PersonalStatistic />
				<Recipes recipes={recipes} moduleTitle="Popular" />
				<Articles articles={articles} />
			</div>
		</ErrorContainer>
	);
}
