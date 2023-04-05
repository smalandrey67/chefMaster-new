export type ViewSettingProperty = {
	viewClass: string;
};

type ViewSettings = {
	main: ViewSettingProperty;
	navbar: ViewSettingProperty;
};

export interface ViewState {
	viewSettings: ViewSettings;
}
