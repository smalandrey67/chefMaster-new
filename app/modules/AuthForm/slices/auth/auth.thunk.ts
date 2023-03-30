import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AuthFormService } from "../../AuthForm.service";
import type {
	LoginResponse,
	LoginThunkProps,
	RefreshResponse,
	RegistrationResponse,
	RegistrationThunkProps
} from "./auth.interface";

const registration = createAsyncThunk<RegistrationResponse, RegistrationThunkProps, { rejectValue: string }>(
	"registration",
	async ({ registrationBody, navigate }, { rejectWithValue, fulfillWithValue }) => {
		try {
			const createdUserData = await AuthFormService.registration(registrationBody);

			fulfillWithValue(navigate());

			return createdUserData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return rejectWithValue(error.response?.data.message);
			}

			return rejectWithValue("Something went wrong");
		}
	}
);

const login = createAsyncThunk<LoginResponse, LoginThunkProps, { rejectValue: string }>(
	"login",
	async ({ loginBody, navigate }, { rejectWithValue, fulfillWithValue }) => {
		try {
			const authorizedUserData = await AuthFormService.login(loginBody);

			fulfillWithValue(navigate());

			return authorizedUserData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return rejectWithValue(error.response?.data.message);
			}

			return rejectWithValue("Something went wrong");
		}
	}
);

const refresh = createAsyncThunk<RefreshResponse, void, { rejectValue: string }>(
	"refresh", async (_, { rejectWithValue }) => {
	try {
		const refreshData = await AuthFormService.refresh();
		return refreshData;
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			return rejectWithValue(error.response?.data.message);
		}

		return rejectWithValue("Something went wrong");
	}
});

const checkIsAuthorized = createAsyncThunk<RefreshResponse, void, { rejectValue: string }>(
	"isAuthorized",
	async (_, { rejectWithValue }) => {
		try {
			const isAuthorizedData = await AuthFormService.refresh();
			return isAuthorizedData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return rejectWithValue(error.response?.data.message);
			}

			return rejectWithValue("Something went wrong");
		}
	}
);

const logout = createAsyncThunk<void, void, { rejectValue: string }>(
	"logout", async (_, { rejectWithValue }) => {
	try {
		await AuthFormService.logout();
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			return rejectWithValue(error.response?.data.message);
		}

		return rejectWithValue("Something went wrong");
	}
});

export const authThunk = { registration, login, refresh, checkIsAuthorized, logout };
