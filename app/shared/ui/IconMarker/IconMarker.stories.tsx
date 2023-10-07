import type { Meta } from "@storybook/react";
import { IconMarker } from "./IconMarker";

import { AiFillFire } from "react-icons/ai";

const meta: Meta<typeof IconMarker> = {
	title: "UI-Components/IconMarker",
	component: IconMarker,
	args: {
		label: "Easy level",
		Icon: AiFillFire,
		iconColor: "#edb200"
	}
};

export default meta;

export const Default = {};
