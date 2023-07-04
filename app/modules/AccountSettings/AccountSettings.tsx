import { AvatarUpdate } from "./components/AvatarUpdate/AvatarUpdate";
import { EmailUpdate } from "./components/EmailUpdate/EmailUpdate";
import { NameUpdate } from "./components/NameUpdate/NameUpdate";

import styles from "./AccountSettings.module.scss";

export function AccountSettings(): JSX.Element {
	return (
		<div className={styles.account}>
			<AvatarUpdate />
			<EmailUpdate />
			<NameUpdate />
		</div>
	);
}
