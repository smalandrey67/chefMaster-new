export type AuthType = "login" | "registration";

export interface AuthScreenProps {
	authScreenTitle: string;
	authType: AuthType;
}
