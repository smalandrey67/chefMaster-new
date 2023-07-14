import type { NavbarItem } from "./Navbar.interface";

import { HiOutlineDocumentText, HiOutlineThumbUp } from "react-icons/hi";
import { RiHomeLine, RiSettingsLine } from "react-icons/ri";

export const navbarItemsForAuthorizedUser: readonly NavbarItem[] = [
	{
		path: "/",
		label: "home",
		id: "19a012f4-b5a4-4609-b718-1fbf68ce1a84",
		Icon: RiHomeLine
	},
	{
		path: "/articles",
		label: "articles",
		id: "ee310c95-d0cc-4e7d-9e3d-ab280fcb870b",
		Icon: HiOutlineDocumentText
	},
	{
		path: "/favorites",
		label: "favorites",
		id: "8d731a59-3a80-4c29-baf9-24bdf337fedf",
		Icon: HiOutlineThumbUp
	}
];

export const navbarItemsForNotAuthorizedUser: readonly NavbarItem[] = [
	{
		path: "/",
		label: "home",
		id: "19a012f4-b5a4-4609-b718-1fbf68ce1a84",
		Icon: RiHomeLine
	},
	{
		path: "/articles",
		label: "articles",
		id: "ee310c95-d0cc-4e7d-9e3d-ab280fcb870b",
		Icon: HiOutlineDocumentText
	},
	{
		path: "/favorites",
		label: "favorites",
		id: "8d731a59-3a80-4c29-baf9-24bdf337fedf",
		Icon: HiOutlineThumbUp
	}
];

export const navbarItemsBottom: readonly NavbarItem[] = [
	{
		path: "/settings",
		label: "settings",
		id: "705e5606-a804-45f7-84d4-7d24a483e57f",
		Icon: RiSettingsLine
	}
];
