import type { User } from "@/interfaces/User.interface";

export interface AuthState {
	user: User | null;
	isLoading: boolean;
	error: string | null;
}

interface AuthBody {
	email: string;
	password: string;
}

export type RegistrationBody = AuthBody & {
	userName: string;
};

export type LoginBody = AuthBody & unknown;

export interface RegistrationThunkProps {
	registrationBody: RegistrationBody;
	navigate: () => void;
	showErrorAlert: (message: string) => void;
}

export interface LoginThunkProps {
	loginBody: LoginBody;
	navigate: () => void;
	showErrorAlert: (message: string) => void;
}
