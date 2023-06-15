import { GiCookingGlove } from "react-icons/gi";

import type { StartCookingProps } from "./StartCooking.interface";

import styles from "./StartCooking.module.scss";

export function StartCooking({ setIsStartCooking }: StartCookingProps): JSX.Element {
	const startCooking = (): void => {
		setIsStartCooking(true);
	};

	return (
		<div className={styles.startCookingWrapper}>
			<button className={styles.startCooking} onClick={startCooking}>
				<GiCookingGlove size={17} />
				start cooking
			</button>
		</div>
	);
}
