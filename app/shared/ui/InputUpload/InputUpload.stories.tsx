import type { Meta, StoryObj } from "@storybook/react";
import { InputUpload } from "./InputUpload";

import { MOCK_UPLOAD_IMAGE } from "@/constants/images.constants";

const meta: Meta<typeof InputUpload> = {
	title: "UI-Components/InputUpload",
	component: InputUpload,
	args: {
		currentImage: MOCK_UPLOAD_IMAGE
	}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
	args: {
		error: "Field is Required"
	}
};
