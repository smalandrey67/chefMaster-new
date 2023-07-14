import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ViewSettingsService } from "../../ViewSettings.service";

import type { SaveViewSettingsThunkProps, ViewSettings } from "./view.interface";
import type { RootState } from "@/store/store";

const getViewSettings = createAsyncThunk<ViewSettings, string, { rejectValue: string }>(
	"get_viewSettings",
	async (userId, thunkApi) => {
		try {
			const viewSettingsData = await ViewSettingsService.getViewSettings(userId);
			return viewSettingsData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return thunkApi.rejectWithValue(error.response?.data.message);
			}
			return thunkApi.rejectWithValue("Something went wrong");
		}
	}
);

const saveViewSettings = createAsyncThunk<ViewSettings, SaveViewSettingsThunkProps, { rejectValue: void; state: RootState }>(
	"save_viewSettings",
	async ({ userId, showSuccessAlert, showErrorAlert }, thunkApi) => {
		try {
			const { viewSettings } = thunkApi.getState();

			thunkApi.fulfillWithValue(showSuccessAlert("Successfully saved view"));

			const updatedViewSettingsData = await ViewSettingsService.saveViewSettings(userId, viewSettings.view);
			return updatedViewSettingsData;
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				return thunkApi.rejectWithValue(showErrorAlert(error.response?.data.message));
			}
			return thunkApi.rejectWithValue(showErrorAlert("Something went wrong"));
		}
	}
);

export const viewSettingsThunk = { getViewSettings, saveViewSettings };
