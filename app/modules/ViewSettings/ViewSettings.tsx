import { ToastContainer } from "react-toastify";
import { Button } from "chefmaster-ui";

import { MainPersonalize } from "./components/MainPersonalize/MainPersonalize";
import { NavbarPersonalize } from "./components/NavbarPersonalize/NavbarPersonalize";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { toastAlert } from "@/utils/toastAlert";
import { selectUser } from "../AuthForm";
import { viewSettingsThunk } from "./slices/view/view.thunk";

import styles from "./ViewSettings.module.scss";

export function ViewSettings(): JSX.Element {
	const user = useAppSelector(selectUser);
	const dispatch = useAppDispatch();

	const saveViewSettings = (): void => {
		if (!user) return;

		dispatch(
			viewSettingsThunk.saveViewSettings({
				userId: user.id,
				showSuccessAlert: (message: string): void => toastAlert(message, "success"),
				showErrorAlert: (message: string): void => toastAlert(message, "error")
			})
		);
	};

	return (
		<div className={styles.view}>
			<MainPersonalize />
			<NavbarPersonalize />

			<div className={styles.viewSave}>
				<Button isFullWidth onClick={saveViewSettings} name="save">
					Save
				</Button>
			</div>
			<ToastContainer role="alert" />
		</div>
	);
}
