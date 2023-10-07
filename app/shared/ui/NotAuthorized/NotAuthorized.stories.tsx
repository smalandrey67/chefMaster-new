import type { Meta, StoryObj } from "@storybook/react";
import { NotAuthorized } from "./NotAuthorized";

const meta: Meta<typeof NotAuthorized> = {
	title: "UI-Components/NotAuthorized",
	component: NotAuthorized
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
