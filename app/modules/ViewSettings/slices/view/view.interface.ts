export type ViewSettingProperty = {
	background: string;
};

export type ViewSettings = {
	main: ViewSettingProperty | null;
	navbar: ViewSettingProperty | null;
};

export interface ViewState {
	view: ViewSettings;
	initialView: ViewSettings;
	isViewHasBeenChanged: {
		navbar: boolean;
		main: boolean;
	};
}

export interface SaveViewSettingsThunkProps {
	userId: string;
	showSuccessAlert: (message: string) => void;
	showErrorAlert: (message: string) => void;
}

export interface ResetViewSettingsThunkProps {
	userId: string;
	showSuccessAlert: (message: string) => void;
	showErrorAlert: (message: string) => void;
}
