import type { Dispatch, SetStateAction } from "react";
import type { ContentElement, SettingsItem } from "../../SettingsNavbar.interface";

export interface SettingsNavbarPointProps extends Omit<SettingsItem, "id"> {
	setSettingsContentName: Dispatch<SetStateAction<ContentElement>>;
}
