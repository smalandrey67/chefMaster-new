import type { IconType } from "react-icons";
import type { LinkProps } from "next/link";

export interface FancyLinkProps extends LinkProps {
	children?: string;
	Icon?: IconType;
	iconSize?: number | string;
	iconColor?: string;
	className?: string;
}
