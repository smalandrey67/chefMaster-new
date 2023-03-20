import { useState } from "react";

import type { RecipeDetailsScreenProps } from "../../RecipeDetailsScreen.interface";

import styles from "./Tabs.module.scss";

export function Tabs({ recipeDetails }: RecipeDetailsScreenProps): JSX.Element {
	const [tab, setTab] = useState<"instruction" | "ingredients" | "cooking">("instruction");

	const chooseTab = (tabName: "instruction" | "ingredients" | "cooking"): void => {
		setTab(tabName);
	};

	return (
		<div className={styles.tabs}>
			<div className={styles.tabsWrapper}>
				<div className={styles.tabsTab} onClick={() => chooseTab("instruction")}>
					Instruction
				</div>
				<div className={styles.tabsTab} onClick={() => chooseTab("ingredients")}>
					Ingredients
				</div>
				<div className={styles.tabsTab} onClick={() => chooseTab("cooking")}>
					Cooking
				</div>
			</div>
			{recipeDetails[tab].map((item) => (
				<span key={item}>{item}</span>
			))}
		</div>
	);
}
