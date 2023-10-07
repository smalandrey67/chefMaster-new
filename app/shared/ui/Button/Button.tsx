import { clsx } from "clsx";

import type { ButtonProps } from "./Button.interface";

import styles from "./Button.module.scss";

export function Button({
	children,
	Icon,
	iconSize,
	iconColor,
	isFullWidth = false,
	className,
	...args
}: ButtonProps): JSX.Element {
	const isIconWithContent = children && Icon;

	return (
		<button
			className={clsx(className, [styles.reset, styles.button], {
				[styles.buttonIconWithContent]: isIconWithContent,
				[styles.buttonFullWidth]: isFullWidth
			})}
			{...args}
		>
			{Icon && <Icon size={iconSize} color={iconColor} />}
			{children}
		</button>
	);
}
