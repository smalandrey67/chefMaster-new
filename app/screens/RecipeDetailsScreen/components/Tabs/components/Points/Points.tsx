import { useEffect } from "react";
import type { TabsData } from "../../Tabs.interface";
import { tabsPoints } from "./Points.constants";
import type { PointsProps } from "./Points.interface";

import styles from "./Points.module.scss";

export function Points({ setTabPointName }: PointsProps): JSX.Element {
	const chooseTabName = (tabName: keyof TabsData): void => {
		setTabPointName(tabName);
	};

	return (
		<div className={styles.pointsWrapper}>
			{tabsPoints.map(({ id, label }) => (
				<div key={id} className={styles.pointsTab} onClick={(): void => chooseTabName(label)}>
					{label}
				</div>
			))}
		</div>
	);
}
