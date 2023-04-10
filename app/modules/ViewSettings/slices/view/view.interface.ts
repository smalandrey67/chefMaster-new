export type ViewClass = "darkNavbarView" | "grayView" | "darkMainView";

export type ViewSettingProperty = {
	viewClass: ViewClass;
};

type ViewSettings = {
	main: ViewSettingProperty;
	navbar: ViewSettingProperty;
};

export interface ViewState {
	view: ViewSettings;
}
