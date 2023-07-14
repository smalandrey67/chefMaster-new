import { viewSettingsThunk } from "./view.thunk";

import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ViewSettingProperty, ViewState } from "./view.interface";

const initialState: ViewState = {
	view: { main: null, navbar: null },
	initialView: { main: null, navbar: null },
	isViewHasBeenChanged: false
};

const viewSlice = createSlice({
	name: "view",
	initialState,
	reducers: {
		changeMainView: (state, { payload }: PayloadAction<ViewSettingProperty>): void => {
			if (payload.background === state.initialView.main?.background) {
				state.view.main = payload;
				state.isViewHasBeenChanged = false;

				return;
			} // checks if user already has such view settings

			state.view.main = payload;
			state.isViewHasBeenChanged = true;
		},

		changeNavbarView: (state, { payload }: PayloadAction<ViewSettingProperty>): void => {
			if (payload.background === state.initialView.navbar?.background) {
				state.view.navbar = payload;
				state.isViewHasBeenChanged = false;

				return;
			} // checks if user already has such view settings

			state.view.navbar = payload;
			state.isViewHasBeenChanged = true;
		},

		resetAllView: (state): void => {
			state.view = { main: null, navbar: null };
			state.isViewHasBeenChanged = false;
		}
	},
	extraReducers: (builder): void => {
		builder.addCase(viewSettingsThunk.getViewSettings.fulfilled, (state, { payload }): void => {
			state.view = payload;
			state.initialView = payload;
		});
		builder.addCase(viewSettingsThunk.saveViewSettings.fulfilled, (state, { payload }): void => {
			state.isViewHasBeenChanged = false;
			state.initialView = payload;
		});
	}
});

export const { reducer: viewReducer, actions: viewActions } = viewSlice;
