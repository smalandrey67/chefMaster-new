import type { AccessToken, RefreshToken } from "@/interfaces/Token.interface";
import type { User } from "@/interfaces/User.interface";

export interface AuthState {
	user: User | null;
	isLoading: boolean;
	error: string | null;
}

// #Request
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
	errorAlert: (message: string) => void;
}

export interface LoginThunkProps {
	loginBody: LoginBody;
	navigate: () => void;
	errorAlert: (message: string) => void;
}

// #Response
interface ResponseAuth {
	user: User;
}

export interface RegistrationResponse extends ResponseAuth {}

export interface LoginResponse extends ResponseAuth {
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}

export interface RefreshResponse extends ResponseAuth {
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}
