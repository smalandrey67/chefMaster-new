import { MdManageAccounts } from "react-icons/md";
import { FaStreetView } from "react-icons/fa";

import type { SettingsItem } from "./SettingsNavbar.interface";

export const settingsItems: readonly SettingsItem[] = [
	{ label: "view", id: "3e94b3c4-63c9-4963-9c8b-0afadf5e6594", contentElement: "view", Icon: FaStreetView },
	{ label: "account", id: "469aacb2-e991-4a49-a709-b4e15f711d4a", contentElement: "account", Icon: MdManageAccounts }
];
