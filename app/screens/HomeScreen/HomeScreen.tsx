import { Categories } from "@/modules/Categories";
import { PersonalStatistic } from "@/modules/PersonalStatistic";
import { Recipes } from "@/modules/Recipes/Recipes";
import { Articles } from "@/modules/Articles";

import type { HomeScreenProps } from "./HomeScreen.interface";

import styles from "./HomeScreen.module.scss";

export function HomeScreen({ popularRecipes, articles }: HomeScreenProps): JSX.Element {
	return (
		<div className={styles.home}>
			<Categories />
			<PersonalStatistic />
			<Recipes recipes={popularRecipes} moduleTitle="Popular" />
			<Articles articles={articles} />
		</div>
	);
}
