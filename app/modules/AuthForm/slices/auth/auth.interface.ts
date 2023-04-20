import type { ResponseAuthInstance } from "@/interfaces/ResponseAuthInstance.interface";
import type { AccessToken, RefreshToken } from "@/interfaces/Token.interface";
import type { User } from "@/interfaces/User.interface";

export interface AuthState {
	user: User | null;
	isLoading: boolean;
	error: string | null;
}

// #request
interface AuthBody {
	email: string;
	password: string;
}

export type RegistrationBody = AuthBody & {
	userName: string;
};

export type LoginBody = AuthBody & unknown;

// #response
export interface RegistrationResponse extends ResponseAuthInstance {}

export interface LoginResponse extends ResponseAuthInstance {
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}

export interface RefreshResponse extends ResponseAuthInstance {
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}

// #thunk props
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
