import { SettingButtons } from "./components/SettingButtons/SettingButtons";
import { MainPersonalize } from "./components/MainPersonalize/MainPersonalize";
import { NavbarPersonalize } from "./components/NavbarPersonalize/NavbarPersonalize";

import styles from "./ViewSettings.module.scss";

export function ViewSettings(): JSX.Element {
	return (
		<div className={styles.view}>
			<MainPersonalize />
			<NavbarPersonalize />
			<SettingButtons />
		</div>
	);
}
