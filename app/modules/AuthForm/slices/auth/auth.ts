import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {}
});

export const { reducer: authReducer, actions: authActions } = authSlice;
