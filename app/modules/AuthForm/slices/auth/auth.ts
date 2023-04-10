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
			localStorage.setItem("accessToken", payload.accessToken);
		});
		// #refresh
		builder.addCase(authThunk.refresh.pending, (state): void => {
			state.error = null;
		});
		builder.addCase(authThunk.refresh.fulfilled, (state, { payload }): void => {
			localStorage.setItem("accessToken", payload.accessToken);
		});
		builder.addCase(authThunk.refresh.rejected, (state, { payload }): void => {
			if (!payload) return;
			state.error = payload;
		});

		// #checkIsAuthorized
		builder.addCase(authThunk.checkIsAuthorized.pending, (state): void => {
			state.error = null;
		});
		builder.addCase(authThunk.checkIsAuthorized.fulfilled, (state, { payload }): void => {
			state.user = payload.user;
			localStorage.setItem("accessToken", payload.accessToken);
		});
		builder.addCase(authThunk.checkIsAuthorized.rejected, (state, { payload }): void => {
			if (!payload) return;
			state.error = payload;
		});

		// #logout
		builder.addCase(authThunk.logout.pending, (state): void => {
			state.error = null;
		});
		builder.addCase(authThunk.logout.fulfilled, (state): void => {
			state.user = null;
			localStorage.removeItem("accessToken");
		});
		builder.addCase(authThunk.logout.rejected, (state, { payload }): void => {
			if (!payload) return;
			state.error = payload;
		});
	}
});

export const { reducer: authReducer, actions: authActions } = authSlice;
