import type { Dispatch, SetStateAction } from "react";
import type { TabsData } from "../../Tabs.interface";

export interface PointsProps {
	setTabPointName: Dispatch<SetStateAction<keyof TabsData>>;
}

export interface TabsPoint {
	id: string;
	label: keyof TabsData;
}
