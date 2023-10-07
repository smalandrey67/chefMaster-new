import clsx from "clsx";

import type { TitleProps } from "./Title.interface";

import styles from "./Title.module.scss";

export function Title({ children, variant = "small", className, ...args }: TitleProps): JSX.Element {
	const isTitleSmall = variant === "small";
	const isTitleBig = variant === "big";

	return (
		<>
			{isTitleSmall && (
				<h5 className={clsx(className, `${styles.title} ${styles.titleSmall}`)} {...args}>
					{children}
				</h5>
			)}

			{isTitleBig && (
				<h2 className={clsx(className, `${styles.title} ${styles.titleBig}`)} {...args}>
					{children}
				</h2>
			)}
		</>
	);
}
