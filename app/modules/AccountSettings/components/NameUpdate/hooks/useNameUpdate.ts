import { toastAlert } from "@/utils/toastAlert";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

import { accountSettingsThunk } from "@/modules/AccountSettings/slice/accountSettings/accountSettings.thunk";
import { selectUser } from "@/modules/AuthForm/slices/auth/auth.selectors";

import type { SubmitHandler, UseFormReset } from "react-hook-form";
import type { SubmitNameUpdateForm } from "../NameUpdate.interface";

export const useNameUpdate = (reset: UseFormReset<SubmitNameUpdateForm>) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	const updateName: SubmitHandler<SubmitNameUpdateForm> = (data): void => {
		if (!user) return;

		dispatch(
			accountSettingsThunk.updateUserName({
				updateUserNameBody: { oldUserName: user.userName, updatedUserName: data.updatedUserName },
				showSuccessAlert: (message: string): void => toastAlert(message, "success"),
				showErrorAlert: (message: string): void => toastAlert(message, "error")
			})
		);

		reset();
	};

	return {
		updateName,
		currentUserName: user?.userName
	};
};
