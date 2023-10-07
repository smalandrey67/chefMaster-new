import { FancyLink } from "@/ui";

import type { NavbarItemProps } from "./NavbarItem.interface";
import styles from "./NavbarItem.module.scss";

export function NavbarItem({ path, label, Icon }: NavbarItemProps): JSX.Element {
	return (
		<li className={styles.listItem}>
			<FancyLink href={path}>{label}</FancyLink>
			<FancyLink href={path} Icon={Icon} iconSize={20} iconColor="#000000" />
		</li>
	);
}
