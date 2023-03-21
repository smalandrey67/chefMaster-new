import type { IngredientsProps } from "./Ingredients.interface";

export function Ingredients({ data }: IngredientsProps): JSX.Element {
	return <div>{data[0]}</div>;
}
