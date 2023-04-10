import { ToastContainer } from "react-toastify";

import { EmailUpdate } from "./components/EmailUpdate/EmailUpdate";
import { NameUpdate } from "./components/NameUpdate/NameUpdate";

import styles from "./AccountSettings.module.scss";

export function AccountSettings(): JSX.Element {
	return (
		<div className={styles.account}>
			<EmailUpdate />
			<NameUpdate />
			<ToastContainer role="alert" />
		</div>
	);
}
