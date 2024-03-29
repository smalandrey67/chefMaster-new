import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { viewActions } from "@/modules/ViewSettings";
import { AuthFormService } from "../../AuthForm.service";

import type {
	LoginResponse,
	RefreshResponse,
	LoginThunkProps,
	RegistrationResponse,
	RegistrationThunkProps
} from "./auth.interface";

const registration = createAsyncThunk<RegistrationResponse, RegistrationThunkProps, { rejectValue: void }>(
	"registration",
	async ({ registrationBody, navigate, showErrorAlert }, thunkApi) => {
		try {
			const createdUserData = await AuthFormService.registration(registrationBody);

			thunkApi.fulfillWithValue(navigate());

			return createdUserData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return thunkApi.rejectWithValue(showErrorAlert(error.response?.data.error[0].msg));
			}

			return thunkApi.rejectWithValue(showErrorAlert("Something went wrong"));
		}
	}
);

const login = createAsyncThunk<LoginResponse, LoginThunkProps, { rejectValue: void }>(
	"login",
	async ({ loginBody, navigate, showErrorAlert }, thunkApi) => {
		try {
			const authorizedUserData = await AuthFormService.login(loginBody);

			thunkApi.fulfillWithValue(navigate());

			return authorizedUserData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return thunkApi.rejectWithValue(showErrorAlert(error.response?.data.error[0].msg));
			}

			return thunkApi.rejectWithValue(showErrorAlert("Something went wrong"));
		}
	}
);

const checkIsAuthorized = createAsyncThunk<RefreshResponse, void, { rejectValue: string }>(
	"isAuthorized",
	async (_, thunkApi) => {
		try {
			const isAuthorizedData = await AuthFormService.refresh();
			return isAuthorizedData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return thunkApi.rejectWithValue(error.response?.data.message);
			}

			return thunkApi.rejectWithValue("Something went wrong");
		}
	}
);

const logout = createAsyncThunk<void, void, { rejectValue: string }>("logout", async (_, thunkApi) => {
	try {
		thunkApi.dispatch(viewActions.resetAllView());

		await AuthFormService.logout();
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			return thunkApi.rejectWithValue(error.response?.data.message);
		}

		return thunkApi.rejectWithValue("Something went wrong");
	}
});

export const authThunk = { registration, login, checkIsAuthorized, logout };
