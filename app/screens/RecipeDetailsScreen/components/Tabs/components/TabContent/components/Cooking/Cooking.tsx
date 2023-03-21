import type { CookingProps } from "./Cooking.interface";

export function Cooking({ data }: CookingProps): JSX.Element {
	return <div>{data[0]}</div>;
}
