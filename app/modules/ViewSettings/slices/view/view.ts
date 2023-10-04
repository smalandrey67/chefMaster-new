import { viewSettingsThunk } from "./view.thunk";

import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ViewSettingProperty, ViewState } from "./view.interface";

export const defaultViewSettings = {
	mainBg: "linear-gradient(45deg, #212121, #282828)",
	navbarBg: "#212121"
};

const initialState: ViewState = {
	view: { main: null, navbar: null },
	initialView: { main: null, navbar: null },
	isViewHasBeenChanged: { navbar: false, main: false }
};

const viewSlice = createSlice({
	name: "view",
	initialState,
	reducers: {
		changeMainView: (state, { payload }: PayloadAction<ViewSettingProperty>): void => {
			state.view.main = payload;

			if (payload.background === state.initialView.main?.background) {
				state.isViewHasBeenChanged.main = false;
				return;
			}

			state.isViewHasBeenChanged.main = true;
		},

		changeNavbarView: (state, { payload }: PayloadAction<ViewSettingProperty>): void => {
			state.view.navbar = payload;

			if (payload.background === state.initialView.navbar?.background) {
				state.isViewHasBeenChanged.navbar = false;
				return;
			}

			state.isViewHasBeenChanged.navbar = true;
		},

		resetAllView: (state): void => {
			state.view = { main: null, navbar: null };
			state.isViewHasBeenChanged = { main: false, navbar: false };
		}
	},
	extraReducers: (builder): void => {
		builder.addCase(viewSettingsThunk.getViewSettings.fulfilled, (state, { payload }): void => {
			state.view = payload;
			state.initialView = payload;
		});
		builder.addCase(viewSettingsThunk.saveViewSettings.fulfilled, (state, { payload }): void => {
			state.isViewHasBeenChanged = { main: false, navbar: false };
			state.initialView = payload;
		});
		builder.addCase(viewSettingsThunk.resetViewSettings.fulfilled, (state): void => {
			state.isViewHasBeenChanged = { main: false, navbar: false };
			state.view = { main: null, navbar: null };

			state.initialView = {
				main: { background: defaultViewSettings.mainBg },
				navbar: { background: defaultViewSettings.navbarBg }
			};
		});
	}
});

export const { reducer: viewReducer, actions: viewActions } = viewSlice;
