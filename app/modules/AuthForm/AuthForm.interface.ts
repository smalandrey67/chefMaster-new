import type { AuthType } from "@/screens/AuthScreen/AuthScreen.interface";

export interface AuthFormProps {
	authType: AuthType;
}

export interface AuthFormData {
	email: string;
	password: string;
	userName: string;
}

export type AccurateAuthData<T extends AuthType> = T extends "login" ? Omit<AuthFormData, "userName"> : AuthFormData;
