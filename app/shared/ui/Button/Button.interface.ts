import type { IconType } from "react-icons";
import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: string;
	Icon?: IconType;
	iconSize?: number | string;
	iconColor?: string;
	isFullWidth?: boolean;
	className?: string;
}
