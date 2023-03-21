import type { TabsData } from "../../Tabs.interface";

export interface TabContentProps {
	tabsData: TabsData;
	tabPointName: keyof TabsData;
}
