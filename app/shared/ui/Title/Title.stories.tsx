import { Title } from "./Title";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Title> = {
	title: "UI-Components/Title",
	component: Title
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
	args: {
		children: "Small Title",
		variant: "small"
	}
};

export const Big: Story = {
	args: {
		children: "Big Title",
		variant: "big"
	}
};
