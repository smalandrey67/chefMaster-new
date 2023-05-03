import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ViewSettingProperty, ViewState } from "./view.interface";

import { viewSettingsThunk } from "./view.thunk";

const initialState: ViewState = {
	view: { main: null, navbar: null },
	isViewHasBeenChanged: false,
	error: null
};

const viewSlice = createSlice({
	name: "view",
	initialState,
	reducers: {
		changeMainView: (state, { payload }: PayloadAction<ViewSettingProperty>): void => {
			// checks if already have such view settings
			if (payload.background === state.view.main?.background) return;

			state.view.main = payload;
			state.isViewHasBeenChanged = true;
		},

		changeNavbarView: (state, { payload }: PayloadAction<ViewSettingProperty>): void => {
			// checks if already have such view settings
			if (payload.background === state.view.navbar?.background) return;

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
		});
		builder.addCase(viewSettingsThunk.getViewSettings.rejected, (state, { payload }): void => {
			if (!payload) return;
			state.error = payload;
		});
	}
});

export const { reducer: viewReducer, actions: viewActions } = viewSlice;
