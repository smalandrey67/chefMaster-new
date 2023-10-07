import { Button } from "./Button";

import { FiArrowLeft } from "react-icons/fi";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
	title: "UI-Components/Button",
	component: Button,
	args: {
		isFullWidth: false,
		iconSize: 18,
		iconColor: "#000000"
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Default"
	}
};

export const WithIcon: Story = {
	args: {
		Icon: FiArrowLeft,
		children: "With Icon"
	}
};

export const FullWidth: Story = {
	args: {
		children: "full width",
		isFullWidth: true
	}
};
