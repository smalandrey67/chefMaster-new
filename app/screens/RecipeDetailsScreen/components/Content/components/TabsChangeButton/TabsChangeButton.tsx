import { Button } from "@/ui";
import { GiCookingGlove, GiTomato } from "react-icons/gi";

import type { TabsChangeButtonProps } from "./TabsChangeButton.interface";

import styles from "./TabsChangeButton.module.scss";

export function TabsChangeButton({ setIsStartCooking, buttonTitle }: TabsChangeButtonProps): JSX.Element {
	const startCooking = (): void => {
		setIsStartCooking((isStartCookingPrev) => !isStartCookingPrev);
	};

	const buttonIcon = buttonTitle === "start cooking" ? GiCookingGlove : GiTomato;

	return (
		<div className={styles.startCookingWrapper}>
			<Button className={styles.startCooking} onClick={startCooking} Icon={buttonIcon} iconSize={17}>
				{buttonTitle}
			</Button>
		</div>
	);
}
