import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "@/modules/AuthForm";
import { profileReducer } from "@/modules/Header";
import { viewReducer } from "@/modules/ViewSettings";
import { accountSettingsReducer } from "@/modules/AccountSettings";

const rootReducer = combineReducers({
	auth: authReducer,
	profile: profileReducer,
	viewSettings: viewReducer,
	accountSettings: accountSettingsReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
