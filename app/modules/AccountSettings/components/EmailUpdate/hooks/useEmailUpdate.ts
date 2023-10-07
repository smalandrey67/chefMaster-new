import { toastAlert } from "@/utils/toastAlert.util";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

import { selectUser } from "@/modules/AuthForm";
import { accountSettingsThunk } from "@/modules/AccountSettings/slice/accountSettings/accountSettings.thunk";

import type { SubmitHandler, UseFormReset } from "react-hook-form";
import type { SubmitEmailUpdateForm } from "../EmailUpdate.interface";

export const useEmailUpdate = (reset: UseFormReset<SubmitEmailUpdateForm>) => {
	const user = useAppSelector(selectUser);
	const dispatch = useAppDispatch();

	const updateEmail: SubmitHandler<SubmitEmailUpdateForm> = (data): void => {
		if (!user) return;

		dispatch(
			accountSettingsThunk.updateEmail({
				updateEmailBody: { oldEmail: user.email, updatedEmail: data.updatedEmail },
				showErrorAlert: (message: string): void => toastAlert(message, "error"),
				showSuccessAlert: (message: string): void => toastAlert(message, "success")
			})
		);

		reset();
	};

	return {
		updateEmail,
		currentEmail: user?.email
	};
};
