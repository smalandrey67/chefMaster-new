import { api } from "@/configs/axios.config";

import type { UpdateEmailResponse, UpdateUserNameResponse } from "@/interfaces/Auth.interface";
import type { UpdateEmailBody, UpdateUserNameBody } from "./AccountSettings.interface";

export const AccountSettingsService = {
	async updateEmail(updateEmailBody: UpdateEmailBody): Promise<UpdateEmailResponse> {
		const { data: updatedEmailData } = await api.post<UpdateEmailResponse>("update-email", updateEmailBody);
		return updatedEmailData;
	},

	async updateUserName(updateUserNameBody: UpdateUserNameBody): Promise<UpdateUserNameResponse> {
		const { data: updatedUserNameData } = await api.post<UpdateUserNameResponse>("update-userName", updateUserNameBody);
		return updatedUserNameData;
	}
};
