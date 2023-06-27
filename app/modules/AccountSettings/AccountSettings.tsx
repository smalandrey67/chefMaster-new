import { EmailUpdate } from "./components/EmailUpdate/EmailUpdate";
import { NameUpdate } from "./components/NameUpdate/NameUpdate";

import styles from "./AccountSettings.module.scss";
import { AvatarUpdate } from "./components/AvatarUpdate/AvatarUpdate";

export function AccountSettings(): JSX.Element {
	return (
		<div className={styles.account}>
			<AvatarUpdate />
			<EmailUpdate />
			<NameUpdate />
		</div>
	);
}
