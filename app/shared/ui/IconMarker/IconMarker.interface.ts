import type { IconType } from "react-icons";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IconMarkerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label: number | string;
	Icon: IconType;
	iconSize?: number | string;
	iconColor?: string;
}
