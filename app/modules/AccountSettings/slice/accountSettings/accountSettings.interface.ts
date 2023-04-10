type UpdateEmailBody = {
	oldEmail: string;
	updatedEmail: string;
};

type UpdateUserNameBody = {
	oldUserName: string;
	updatedUserName: string;
};

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
