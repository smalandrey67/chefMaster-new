import Cookies from "js-cookie";

import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./auth.interface";
import type { User } from "@/interfaces/User.interface";

import { authThunk } from "./auth.thunk";

const initialState: AuthState = {
	user: null,
	isLoading: false,
	error: null
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		updateUser: (state, { payload }: PayloadAction<User>): void => {
			state.user = payload;
		}
	},
	extraReducers: (builder): void => {
		// #login
		builder.addCase(authThunk.login.fulfilled, (state, { payload }): void => {
			state.user = payload.user;

			Cookies.set("user", JSON.stringify(payload.user));
			localStorage.setItem("accessToken", payload.accessToken);
		});

		// #checkIsAuthorized
		builder.addCase(authThunk.checkIsAuthorized.pending, (state): void => {
			state.error = null;
		});
		builder.addCase(authThunk.checkIsAuthorized.fulfilled, (state, { payload }): void => {
			state.user = payload.user;

			Cookies.set("user", JSON.stringify(payload.user));
			localStorage.setItem("accessToken", payload.accessToken);
		});
		builder.addCase(authThunk.checkIsAuthorized.rejected, (state, { payload }): void => {
			if (!payload) return;
			state.error = payload;

			Cookies.remove("user");
		});

		// #logout
		builder.addCase(authThunk.logout.pending, (state): void => {
			state.error = null;
		});
		builder.addCase(authThunk.logout.fulfilled, (state): void => {
			state.user = null;

			Cookies.remove("user");
			localStorage.removeItem("accessToken");
		});
		builder.addCase(authThunk.logout.rejected, (state, { payload }): void => {
			if (!payload) return;
			state.error = payload;
		});
	}
});

export const { reducer: authReducer, actions: authActions } = authSlice;
