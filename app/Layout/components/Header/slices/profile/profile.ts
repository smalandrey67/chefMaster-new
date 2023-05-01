import { createSlice } from "@reduxjs/toolkit";
import type { ProfileState } from "./profile.interface";

const initialState: ProfileState = {
	isProfileCardOpen: false
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		toggleProfileCard: (state): void => {
			state.isProfileCardOpen = !state.isProfileCardOpen;
		},

		closeProfileCard: (state): void => {
			state.isProfileCardOpen = false;
		}
	}
});

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
