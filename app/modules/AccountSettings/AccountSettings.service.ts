import { $apiProtected } from "@/config/axios.config";
import type {
	UpdateEmailBody,
	UpdateAvatarBody,
	UpdateUserNameBody,
	UpdateEmailResponse,
	UpdateAvatarResponse,
	UpdateUserNameResponse
} from "./slice/accountSettings/accountSettings.interface";

export const AccountSettingsService = {
	async updateEmail(updateEmailBody: UpdateEmailBody): Promise<UpdateEmailResponse> {
		const { data: updatedEmailData } = await $apiProtected.post<UpdateEmailResponse>("/update-email", updateEmailBody);
		return updatedEmailData;
	},

	async updateUserName(updateUserNameBody: UpdateUserNameBody): Promise<UpdateUserNameResponse> {
		const { data: updatedUserNameData } = await $apiProtected.post<UpdateUserNameResponse>(
			"/update-userName",
			updateUserNameBody
		);
		return updatedUserNameData;
	},

	async updateAvatar(updateAvatarBody: UpdateAvatarBody): Promise<UpdateAvatarResponse> {
		const { data: updatedAvatarData } = await $apiProtected.post<UpdateAvatarResponse>("/update-avatar", updateAvatarBody);
		return updatedAvatarData;
	}
};
