import type { Tokens } from "@/interfaces/Tokens.interface";
import type { ResponseAuthInstance } from "@/interfaces/ResponseAuthInstance.interface";

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
export interface UpdateEmailResponse extends ResponseAuthInstance, Tokens {}

export interface UpdateUserNameResponse extends ResponseAuthInstance, Tokens {}

export interface UpdateAvatarResponse extends ResponseAuthInstance, Tokens {}

// #thunk props
export interface UpdateEmailThunkProps {
	updateEmailBody: UpdateEmailBody;
	showErrorAlert: (message: string) => void;
	showSuccessAlert: (message: string) => void;
}

export interface UpdateUserNameThunkProps {
	updateUserNameBody: UpdateUserNameBody;
	showErrorAlert: (message: string) => void;
	showSuccessAlert: (message: string) => void;
}

export interface UpdateAvatarThunkProps {
	updateAvatarBody: UpdateAvatarBody;
	showErrorAlert: (message: string) => void;
	showSuccessAlert: (message: string) => void;
}
