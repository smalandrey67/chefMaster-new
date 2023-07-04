import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AccountSettingsService } from "../../AccountSettings.service";
import { authActions } from "@/modules/AuthForm";

import type {
	UpdateEmailThunkProps,
	UpdateUserNameThunkProps,
	UpdateEmailResponse,
	UpdateUserNameResponse,
	UpdateAvatarResponse,
	UpdateAvatarThunkProps
} from "./accountSettings.interface";

const updateEmail = createAsyncThunk<UpdateEmailResponse, UpdateEmailThunkProps, { rejectValue: void }>(
	"updateEmail",
	async ({ updateEmailBody, showErrorAlert, showSuccessAlert }, thunkApi) => {
		try {
			const updatedUserData = await AccountSettingsService.updateEmail(updateEmailBody);

			thunkApi.dispatch(authActions.updateUserLocal(updatedUserData.user));
			thunkApi.fulfillWithValue(showSuccessAlert("Successfully updated email"));

			return updatedUserData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return thunkApi.rejectWithValue(showErrorAlert(error.response?.data.error[0].msg));
			}

			return thunkApi.rejectWithValue(showErrorAlert("Something went wrong"));
		}
	}
);

const updateUserName = createAsyncThunk<UpdateUserNameResponse, UpdateUserNameThunkProps, { rejectValue: void }>(
	"updateUserName",
	async ({ updateUserNameBody, showErrorAlert, showSuccessAlert }, thunkApi) => {
		try {
			const updatedUserData = await AccountSettingsService.updateUserName(updateUserNameBody);

			thunkApi.dispatch(authActions.updateUserLocal(updatedUserData.user));
			thunkApi.fulfillWithValue(showSuccessAlert("Successfully updated name"));

			return updatedUserData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return thunkApi.rejectWithValue(showErrorAlert(error.response?.data.error[0].msg));
			}

			return thunkApi.rejectWithValue(showErrorAlert("Something went wrong"));
		}
	}
);

const updateAvatar = createAsyncThunk<UpdateAvatarResponse, UpdateAvatarThunkProps, { rejectValue: void }>(
	"updateAvatar",
	async ({ updateAvatarBody, showErrorAlert, showSuccessAlert }, thunkApi) => {
		try {
			const updatedUserData = await AccountSettingsService.updateAvatar(updateAvatarBody);

			thunkApi.dispatch(authActions.updateUserLocal(updatedUserData.user));
			thunkApi.fulfillWithValue(showSuccessAlert("Successfully updated avatar"));

			return updatedUserData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return thunkApi.rejectWithValue(showErrorAlert(error.response?.data.message));
			}

			return thunkApi.rejectWithValue(showErrorAlert("Something went wrong"));
		}
	}
);

export const accountSettingsThunk = { updateEmail, updateUserName, updateAvatar };
