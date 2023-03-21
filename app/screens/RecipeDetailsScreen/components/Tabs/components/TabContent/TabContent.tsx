import { Cooking } from "./components/Cooking/Cooking";
import { Ingredients } from "./components/Ingredients/Ingredients";
import { Instruction } from "./components/Instruction/Instruction";

import type { TabContentProps } from "./TabContent.interface";

const Tabs = {
	instruction: Instruction,
	ingredients: Ingredients,
	cooking: Cooking
};

export function TabContent({ tabsData, tabPointName }: TabContentProps): JSX.Element {
	const Component = Tabs[tabPointName];

	return (
		<div>
			<Component data={tabsData[tabPointName]} />
		</div>
	);
}
