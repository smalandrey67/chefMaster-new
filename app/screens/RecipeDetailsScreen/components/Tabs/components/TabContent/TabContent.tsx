import { Cooking } from "./components/Cooking/Cooking";
import { Ingredients } from "./components/Ingredients/Ingredients";
import { Instruction } from "./components/Instruction/Instruction";

import type { TabContentProps } from "./TabContent.interface";

const tabsComponents = {
	instruction: Instruction,
	ingredients: Ingredients,
	cooking: Cooking
};

export function TabContent({ tabsData, tabPointName }: TabContentProps): JSX.Element {
	const Component = tabsComponents[tabPointName];

	return (
		<div>
			<Component data={tabsData[tabPointName]} />
		</div>
	);
}
