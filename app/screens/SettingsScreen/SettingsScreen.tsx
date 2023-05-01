import { useEffect, useState } from "react";

import { SettingsNavbar } from "./components/SettingsNavbar/SettingsNavbar";
import { SettingsContent } from "./components/SettingsContent/SettingsContent";

import type { ContentElement } from "./components/SettingsNavbar/SettingsNavbar.interface";

import styles from "./SettingsScreen.module.scss";
import { api } from "@/configs/axios.config";

export function SettingsScreen(): JSX.Element {
	const [settingsContentName, setSettingsContentName] = useState<ContentElement>("view");

	return (
		<div className={styles.settings}>
			<SettingsNavbar setSettingsContentName={setSettingsContentName} />
			<SettingsContent settingsContentName={settingsContentName} />
		</div>
	);
}
