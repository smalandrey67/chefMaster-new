import { ViewSettings } from "@/modules/ViewSettings";
import { AccountSettings } from "@/modules/AccountSettings";

import type { SettingsContentProps } from "./SettingsContent.interface";

import styles from "./SettingsContent.module.scss";

const settingsComponents = {
	view: ViewSettings,
	account: AccountSettings
};

export function SettingsContent({ settingsContentName }: SettingsContentProps): JSX.Element {
	const Component = settingsComponents[settingsContentName];

	return (
		<div className={styles.content}>
			<Component />
		</div>
	);
}
