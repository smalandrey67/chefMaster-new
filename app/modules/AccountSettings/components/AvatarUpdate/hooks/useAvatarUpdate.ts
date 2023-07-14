import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { accountSettingsThunk } from "@/modules/AccountSettings/slice/accountSettings/accountSettings.thunk";
import { toastAlert } from "@/utils/toastAlert.util";

import { selectUser } from "@/modules/AuthForm";

import type { SubmitHandler, UseFormReset } from "react-hook-form";
import type { SubmitAvatarUpdateForm } from "../AvatarUpdate.interface";

export const useAvatarUpdate = (reset: UseFormReset<SubmitAvatarUpdateForm>) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	const updateAvatar: SubmitHandler<SubmitAvatarUpdateForm> = (data): void => {
		if (!user) return;

		const formData = new FormData();

		formData.append("avatar", data.avatar[0]);
		formData.append("userId", user.id);

		dispatch(
			accountSettingsThunk.updateAvatar({
				updateAvatarBody: formData,
				showErrorAlert: (message: string): void => toastAlert(message, "error"),
				showSuccessAlert: (message: string): void => toastAlert(message, "success")
			})
		);

		reset();
	};

	return updateAvatar;
};
