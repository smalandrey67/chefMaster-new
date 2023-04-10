import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AccountSettingsService } from "../../AccountSettings.service";
import { authActions } from "@/modules/AuthForm";

import type { UpdateEmailThunkProps, UpdatedUserNameThunkProps } from "./accountSettings.interface";
import type { UpdateEmailResponse, UpdateUserNameResponse } from "@/interfaces/Auth.interface";

const updateEmail = createAsyncThunk<UpdateEmailResponse, UpdateEmailThunkProps, { rejectValue: void }>(
	"updateEmail",
	async ({ updateEmailBody, showErrorAlert, showSuccessAlert }, thunkApi) => {
		try {
			const updatedUser = await AccountSettingsService.updateEmail(updateEmailBody);

			thunkApi.dispatch(authActions.updateUser(updatedUser.user));
			thunkApi.fulfillWithValue(showSuccessAlert("Successfully updated email"));

			return updatedUser;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return thunkApi.rejectWithValue(showErrorAlert(error.response?.data.message));
			}

			return thunkApi.rejectWithValue(showErrorAlert("Something went wrong"));
		}
	}
);

const updateUserName = createAsyncThunk<UpdateUserNameResponse, UpdatedUserNameThunkProps, { rejectValue: void }>(
	"updatedUserName",
	async ({ updateUserNameBody, showErrorAlert, showSuccessAlert }, thunkApi) => {
		try {
			const updatedUser = await AccountSettingsService.updateUserName(updateUserNameBody);

			thunkApi.dispatch(authActions.updateUser(updatedUser.user));
			thunkApi.fulfillWithValue(showSuccessAlert("Successfully updated name"));

			return updatedUser;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return thunkApi.rejectWithValue(showErrorAlert(error.response?.data.message));
			}

			return thunkApi.rejectWithValue(showErrorAlert("Something went wrong"));
		}
	}
);

export const accountSettingsThunk = { updateEmail, updateUserName };
