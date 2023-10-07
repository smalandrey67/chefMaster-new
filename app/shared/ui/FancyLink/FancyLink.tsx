import clsx from "clsx";
import Link from "next/link";

import type { FancyLinkProps } from "./FancyLink.interface";

import styles from "./FancyLink.module.scss";

export function FancyLink({ children, href, Icon, iconSize, iconColor, className, ...args }: FancyLinkProps): JSX.Element {
	const isIconOnly = !children && Icon;

	return (
		<Link
			className={clsx(className, `${styles.reset} ${styles.fancyLink}`, {
				[styles.fancyLinkIconOnly]: isIconOnly
			})}
			href={href}
			{...args}
		>
			{Icon && <Icon size={iconSize} color={iconColor} />}
			{children}
		</Link>
	);
}
