import { Step } from "./components/Step/Step";

import type { CookingProps } from "./Cooking.interface";

export function Cooking({ cooking }: CookingProps): JSX.Element {
	return (
		<ul>
			{cooking.map((step) => (
				<Step key={step.id} {...step} />
			))}
		</ul>
	);
}
