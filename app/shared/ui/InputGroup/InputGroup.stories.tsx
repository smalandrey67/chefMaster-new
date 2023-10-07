import { InputGroup } from "./InputGroup";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputGroup> = {
	title: "UI-Components/InputGroup",
	component: InputGroup,
	args: {
		labelName: "email:",
		type: "email",
		name: "email"
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
	args: {
		error: "Field is required"
	}
};
