import { useState } from "react";

import { Cooking } from "./components/Cooking/Cooking";
import { Description } from "./components/Description/Description";
import { Ingredients } from "./components/Ingredients/Ingredients";
import { TabsChangeButton } from "./components/TabsChangeButton/TabsChangeButton";

import type { ContentProps } from "./Content.interface";

import styles from "./Content.module.scss";

export function Content({ cooking, description, ingredients }: ContentProps): JSX.Element {
	const [isStartCooking, setIsStartCooking] = useState<boolean>(false);

	return (
		<>
			{isStartCooking ? (
				<div className={styles.content}>
					<Cooking cooking={cooking} />
					{isStartCooking && <TabsChangeButton setIsStartCooking={setIsStartCooking} buttonTitle="ingredients" />}
				</div>
			) : (
				<div className={styles.content}>
					<Description description={description} />
					<Ingredients ingredients={ingredients} />
					{isStartCooking || <TabsChangeButton setIsStartCooking={setIsStartCooking} buttonTitle="start cooking" />}
				</div>
			)}
		</>
	);
}
