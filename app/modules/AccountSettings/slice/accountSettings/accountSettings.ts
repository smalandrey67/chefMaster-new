import { createSlice } from "@reduxjs/toolkit";
import { accountSettingsThunk } from "./accountSettings.thunk";

const accountSettingsSlice = createSlice({
	name: "accountSettings",
	initialState: {},
	reducers: {},
	extraReducers: (builder): void => {
		builder.addCase(accountSettingsThunk.updateEmail.fulfilled, (state, { payload }): void => {
			localStorage.setItem("accessToken", payload.accessToken);
		});
		builder.addCase(accountSettingsThunk.updateUserName.fulfilled, (state, { payload }): void => {
			localStorage.setItem("accessToken", payload.accessToken);
		});
	}
});

export const { reducer: accountSettingsReducer, actions: accountSettingsActions } = accountSettingsSlice;
