import type { User } from "@/interfaces/User.interface";
import type { Tokens } from "@/interfaces/Tokens.interface";
import type { AccurateAuthData } from "../../AuthForm.interface";
import type { ResponseAuthInstance } from "@/interfaces/ResponseAuthInstance.interface";

export interface AuthState {
	user: User | null;
}

// #response
export interface RegistrationResponse extends ResponseAuthInstance {}

export interface LoginResponse extends ResponseAuthInstance, Tokens {}

export interface RefreshResponse extends ResponseAuthInstance, Tokens {}

// #thunk props
export interface RegistrationThunkProps {
	registrationBody: AccurateAuthData<"registration">;
	navigate: () => Promise<boolean>;
	showErrorAlert: (message: string) => void;
}

export interface LoginThunkProps {
	loginBody: AccurateAuthData<"login">;
	navigate: () => Promise<boolean>;
	showErrorAlert: (message: string) => void;
}
