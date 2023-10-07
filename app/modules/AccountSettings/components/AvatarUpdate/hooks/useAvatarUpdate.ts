import { toastAlert } from "@/utils/toastAlert.util";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

import { selectUser } from "@/modules/AuthForm";
import { accountSettingsThunk } from "@/modules/AccountSettings/slice/accountSettings/accountSettings.thunk";

import type { SubmitHandler, UseFormReset } from "react-hook-form";
import type { SubmitAvatarUpdateForm } from "../AvatarUpdate.interface";

export const useAvatarUpdate = (reset: UseFormReset<SubmitAvatarUpdateForm>) => {
	const user = useAppSelector(selectUser);
	const dispatch = useAppDispatch();

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

	return {
		updateAvatar,
		currentAvatar: user?.avatar
	};
};
