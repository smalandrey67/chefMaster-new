import type { Dispatch, SetStateAction } from "react";
import type { IconType } from "react-icons";

export type ContentElement = "view" | "account";

export interface SettingsItem {
	label: string;
	id: string;
	contentElement: ContentElement;
	Icon: IconType;
}

export interface SettingsNavbarProps {
	setSettingsContentName: Dispatch<SetStateAction<ContentElement>>;
}
