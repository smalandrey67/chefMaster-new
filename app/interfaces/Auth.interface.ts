import type { AccessToken, RefreshToken } from "./Token.interface";
import type { User } from "./User.interface";

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

export interface UpdateEmailResponse extends ResponseAuth {
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}

export interface UpdateUserNameResponse extends ResponseAuth {
	accessToken: AccessToken;
	refreshToken: RefreshToken;
}
