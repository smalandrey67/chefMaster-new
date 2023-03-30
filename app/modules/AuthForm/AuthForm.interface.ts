import type { AuthType } from "@/screens/AuthScreen/AuthScreen.interface";

export interface AuthFormProps {
	authType: AuthType;
}

export interface SubmitAuthForm {
	email: string;
	password: string;
}
