export type AuthType = "login" | "registration";

export interface AuthScreenProps {
	screenTitle: string;
	authType: AuthType;
}
