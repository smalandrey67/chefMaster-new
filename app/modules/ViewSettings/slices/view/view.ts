import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ViewSettingProperty, ViewState } from "./view.interface";

import { viewSettingsThunk } from "./view.thunk";

const initialState: ViewState = {
	view: { main: null, navbar: null },
	error: null
};

const viewSlice = createSlice({
	name: "view",
	initialState,
	reducers: {
		changeMainView: (state, { payload }: PayloadAction<ViewSettingProperty>): void => {
			state.view.main = payload;
		},

		changeNavbarView: (state, { payload }: PayloadAction<ViewSettingProperty>): void => {
			state.view.navbar = payload;
		},

		resetAllView: (state): void => {
			state.view = { main: null, navbar: null };
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
