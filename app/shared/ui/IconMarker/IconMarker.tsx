import type { IconMarkerProps } from "./IconMarker.interface";

import styles from "./IconMarker.module.scss";

export function IconMarker({ label, Icon, iconSize, iconColor, ...args }: IconMarkerProps): JSX.Element {
	return (
		<div className={styles.marker} {...args}>
			<Icon size={iconSize} color={iconColor} />
			<span className={styles.markerTitle}>{label}</span>
		</div>
	);
}
