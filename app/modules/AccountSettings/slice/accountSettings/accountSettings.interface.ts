import type { ResponseAuthInstance } from "@/interfaces/ResponseAuthInstance.interface";
import type { AccessToken, RefreshToken } from "@/interfaces/Token.interface";

// #request
export type UpdateEmailBody = {
	oldEmail: string;
	updatedEmail: string;
};

export type UpdateUserNameBody = {
	oldUserName: string;
	updatedUserName: string;
};

export type UpdateAvatarBody = FormData;

// #response
export interface UpdateEmailResponse extends ResponseAuthInstance {
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}

export interface UpdateUserNameResponse extends ResponseAuthInstance {
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}

export interface UpdateAvatarResponse extends ResponseAuthInstance {
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}

// #thunk props
export interface UpdateEmailThunkProps {
	updateEmailBody: UpdateEmailBody;
	showErrorAlert: (message: string) => void;
	showSuccessAlert: (message: string) => void;
}

export interface UpdatedUserNameThunkProps {
	updateUserNameBody: UpdateUserNameBody;
	showErrorAlert: (message: string) => void;
	showSuccessAlert: (message: string) => void;
}

export interface UpdatedAvatarThunkProps {
	updatedAvatarBody: UpdateAvatarBody;
	showErrorAlert: (message: string) => void;
	showSuccessAlert: (message: string) => void;
}
