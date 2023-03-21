import { useState } from "react";

import { Points } from "./components/Points/Points";
import { TabContent } from "./components/TabContent/TabContent";

import type { TabsData, TabsProps } from "./Tabs.interface";

import styles from "./Tabs.module.scss";

export function Tabs({ tabsData }: TabsProps): JSX.Element {
	const [tabPointName, setTabPointName] = useState<keyof TabsData>("instruction");

	return (
		<div className={styles.tabs}>
			<Points setTabPointName={setTabPointName} />
			<TabContent tabsData={tabsData} tabPointName={tabPointName} />
		</div>
	);
}
