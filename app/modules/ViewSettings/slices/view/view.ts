import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ViewSettingProperty, ViewState } from "./view.interface";

const initialValues = {
	main: { viewClass: "darkMainView" },
	navbar: { viewClass: "darkNavbarView" }
};

const initialState: ViewState = {
	viewSettings:
		typeof window !== "undefined" && localStorage.getItem("viewSettings")
			? JSON.parse(localStorage.getItem("viewSettings") || "")
			: initialValues
};

const viewSlice = createSlice({
	name: "view",
	initialState,
	reducers: {
		changeMainView: (state, { payload }: PayloadAction<ViewSettingProperty>): void => {
			state.viewSettings.main = payload;
		},

		changeNavbarView: (state, { payload }: PayloadAction<ViewSettingProperty>): void => {
			state.viewSettings.navbar = payload;
		},

		saveViewSettings: (state): void => {
			localStorage.setItem("viewSettings", JSON.stringify(state.viewSettings));
		}
	}
});

export const { reducer: viewReducer, actions: viewActions } = viewSlice;
