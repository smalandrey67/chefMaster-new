import { Button } from "@/ui";

import { selectUser } from "@/modules/AuthForm";
import { toastAlert } from "@/utils/toastAlert.util";
import { defaultViewSettings } from "../../slices/view/view";

import { viewSettingsThunk } from "../../slices/view/view.thunk";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { selectInitialView, selectIsViewHasBeenChanged } from "../../slices/view/view.selectors";

import styles from "./SettingButtons.module.scss";

export function SettingButtons(): JSX.Element {
	const user = useAppSelector(selectUser);
	const initialView = useAppSelector(selectInitialView);
	const isViewHasBeenChanged = useAppSelector(selectIsViewHasBeenChanged);

	const dispatch = useAppDispatch();

	const saveViewSettings = (): void => {
		if (!user || !isViewHasBeenChanged) return;

		dispatch(
			viewSettingsThunk.saveViewSettings({
				userId: user.id,
				showSuccessAlert: (message: string): void => toastAlert(message, "success"),
				showErrorAlert: (message: string): void => toastAlert(message, "error")
			})
		);
	};

	const resetViewSettings = (): void => {
		if (!user) return;

		dispatch(
			viewSettingsThunk.resetViewSettings({
				userId: user.id,
				showSuccessAlert: (message: string): void => toastAlert(message, "success"),
				showErrorAlert: (message: string): void => toastAlert(message, "error")
			})
		);
	};

	const isCanBeSaved = Object.values(isViewHasBeenChanged).includes(true);
	const isCanBeReset =
		initialView.main?.background !== defaultViewSettings.mainBg ||
		initialView.navbar?.background !== defaultViewSettings.navbarBg;

	return (
		<div className={styles.settingsButtonWrapper}>
			<Button isFullWidth onClick={saveViewSettings} name="save" disabled={!isCanBeSaved}>
				Save
			</Button>
			<Button isFullWidth onClick={resetViewSettings} name="save" disabled={!isCanBeReset}>
				Reset
			</Button>
		</div>
	);
}
