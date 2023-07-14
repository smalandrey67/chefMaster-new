import { type Action, type ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "@/modules/AuthForm";
import { viewReducer } from "@/modules/ViewSettings";
import { accountSettingsReducer } from "@/modules/AccountSettings";
import { profileReducer } from "@/Layout/components/Header/slices/profile/profile";
import { favoritesReducer } from "@/modules/MakeRecipeFavorite";

import localStorageMiddleware from "./middlewares/localStorage.middleware";

const rootReducer = combineReducers({
	auth: authReducer,
	profile: profileReducer,
	viewSettings: viewReducer,
	accountSettings: accountSettingsReducer,
	favorites: favoritesReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware({ serializableCheck: false }).concat(localStorageMiddleware);
		}
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
