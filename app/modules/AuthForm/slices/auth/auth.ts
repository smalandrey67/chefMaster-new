import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import type { User } from "@/interfaces/User.interface";
import type { AuthState } from "./auth.interface";

import { lcs } from "app/shared/lib/lcs/lcs";
import { authThunk } from "./auth.thunk";

const initialState: AuthState = {
	user: null
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		updateUserLocal: (state, { payload }: PayloadAction<User>): void => {
			state.user = payload;
		}
	},
	extraReducers: (builder): void => {
		// #login
		builder.addCase(authThunk.login.fulfilled, (state, { payload }): void => {
			state.user = payload.user;

			Cookies.set("user", JSON.stringify(payload.user));
			lcs.setItem("accessToken", payload.accessToken);
		});

		// #checkIsAuthorized
		builder.addCase(authThunk.checkIsAuthorized.fulfilled, (state, { payload }): void => {
			state.user = payload.user;

			Cookies.set("user", JSON.stringify(payload.user));
			lcs.setItem("accessToken", payload.accessToken);
		});
		builder.addCase(authThunk.checkIsAuthorized.rejected, (): void => {
			Cookies.remove("user");
			lcs.removeItem("accessToken");
		});

		// #logout
		builder.addCase(authThunk.logout.fulfilled, (state): void => {
			state.user = null;

			Cookies.remove("user");
			localStorage.removeItem("accessToken");
		});
	}
});

export const { reducer: authReducer, actions: authActions } = authSlice;
