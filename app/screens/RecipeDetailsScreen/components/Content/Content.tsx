import { useState } from "react";

import { Ingredients } from "./components/Ingredients/Ingredients";
import { StartCooking } from "./components/StartCooking/StartCooking";
import { Cooking } from "./components/Cooking/Cooking";
import { Instruction } from "./components/Instruction/Instruction";

import type { ContentProps } from "./Content.interface";

import styles from "./Content.module.scss";

export function Content({ contentData }: ContentProps): JSX.Element {
	const [isStartCooking, setIsStartCooking] = useState<boolean>(false);

	return (
		<>
			{isStartCooking ? (
				<Cooking />
			) : (
				<div className={styles.content}>
					<Instruction />
					<Ingredients ingredients={contentData.ingredients} />

					{isStartCooking || <StartCooking setIsStartCooking={setIsStartCooking} />}
				</div>
			)}
		</>
	);
}
