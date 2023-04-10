import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ViewSettingProperty, ViewState } from "./view.interface";

const initialViewValues = {
	main: { viewClass: "darkMainView" },
	navbar: { viewClass: "darkNavbarView" }
};

const initialState: ViewState = {
	view:
		typeof window !== "undefined" && localStorage.getItem("viewSettings")
			? JSON.parse(localStorage.getItem("viewSettings") || "")
			: initialViewValues
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

		saveViewSettings: (state): void => {
			localStorage.setItem("viewSettings", JSON.stringify(state.view));
		}
	}
});

export const { reducer: viewReducer, actions: viewActions } = viewSlice;
