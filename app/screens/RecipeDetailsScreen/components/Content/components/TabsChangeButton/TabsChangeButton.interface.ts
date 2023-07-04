import type { Dispatch, SetStateAction } from "react";

type ButtonTile = "start cooking" | "ingredients";

export interface TabsChangeButtonProps {
	setIsStartCooking: Dispatch<SetStateAction<boolean>>;
	buttonTitle: ButtonTile;
}
