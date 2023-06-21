import { Button } from "chefmaster-ui";
import { GiCookingGlove } from "react-icons/gi";

import type { StartCookingProps } from "./StartCooking.interface";

import styles from "./StartCooking.module.scss";

export function StartCooking({ setIsStartCooking }: StartCookingProps): JSX.Element {
	const startCooking = (): void => {
		setIsStartCooking(true);
	};

	return (
		<div className={styles.startCookingWrapper}>
			<Button className={styles.startCooking} onClick={startCooking} Icon={GiCookingGlove} iconSize={17}>
				start cooking
			</Button>
		</div>
	);
}
