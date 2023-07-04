import { createSlice } from "@reduxjs/toolkit";
import { accountSettingsThunk } from "./accountSettings.thunk";

const accountSettingsSlice = createSlice({
	name: "accountSettings",
	initialState: {},
	reducers: {},
	extraReducers: (builder): void => {
		builder.addCase(accountSettingsThunk.updateAvatar.fulfilled, (_, { payload }): void => {
			localStorage.setItem("accessToken", payload.accessToken);
		});
		builder.addCase(accountSettingsThunk.updateEmail.fulfilled, (_, { payload }): void => {
			localStorage.setItem("accessToken", payload.accessToken);
		});
		builder.addCase(accountSettingsThunk.updateUserName.fulfilled, (_, { payload }): void => {
			localStorage.setItem("accessToken", payload.accessToken);
		});
	}
});

export const { reducer: accountSettingsReducer, actions: accountSettingsActions } = accountSettingsSlice;
