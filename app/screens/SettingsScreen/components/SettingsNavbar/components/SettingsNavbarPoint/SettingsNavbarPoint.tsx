import type { SettingsNavbarPointProps } from "./SettingsNavbarPoint.interface";

import styles from "./SettingsNavbarPoint.module.scss";

export function SettingsNavbarPoint({
	setSettingsContentName,
	label,
	contentElement,
	Icon
}: SettingsNavbarPointProps): JSX.Element {
	const chooseSettingsPoint = (): void => {
		setSettingsContentName(contentElement);
	};

	return (
		<li className={styles.menuPoint} onClick={chooseSettingsPoint}>
			<Icon size={25} />
			{label}
		</li>
	);
}
