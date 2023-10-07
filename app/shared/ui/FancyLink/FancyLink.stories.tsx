import { FancyLink } from "./FancyLink";

import { FiArrowLeft } from "react-icons/fi";
import type { Meta, StoryObj } from "@storybook/react";

const MOCK_HREF_ARG = "https://github.com/smalandrey67";

const meta: Meta<typeof FancyLink> = {
	title: "UI-Components/FancyLink",
	component: FancyLink,
	args: {
		iconSize: 20,
		href: MOCK_HREF_ARG
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Fancy Link"
	}
};

export const WithIcon: Story = {
	args: {
		children: "Fancy Link With Icon",
		Icon: FiArrowLeft,
		iconColor: "#ffffff"
	}
};

export const OnlyIcon: Story = {
	args: {
		Icon: FiArrowLeft,
		iconColor: "#000000"
	}
};
