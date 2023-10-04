import { MStep } from "./components/Step/Step";
import { biasFromLeftToRight } from "@/constants/motion.constant";

import type { CookingProps } from "./Cooking.interface";

export function Cooking({ cooking }: CookingProps): JSX.Element {
	return (
		<ul>
			{cooking.map(({ id, ...step }) => (
				<MStep key={id} variants={biasFromLeftToRight} initial="hidden" animate="visible" custom={step.stepCount} {...step} />
			))}
		</ul>
	);
}
