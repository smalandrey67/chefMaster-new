import { SettingsNavbarPoint } from "./components/SettingsNavbarPoint/SettingsNavbarPoint";

import { settingsItems } from "./SettingsNavbar.constants";
import type { SettingsNavbarProps } from "./SettingsNavbar.interface";

import styles from "./SettingsNavbar.module.scss";

export function SettingsNavbar({ setSettingsContentName }: SettingsNavbarProps): JSX.Element {
	return (
		<aside className={styles.menu}>
			<nav>
				<ul className={styles.menuList}>
					{settingsItems.map(({ id, ...properties }) => (
						<SettingsNavbarPoint key={id} setSettingsContentName={setSettingsContentName} {...properties} />
					))}
				</ul>
			</nav>
		</aside>
	);
}
