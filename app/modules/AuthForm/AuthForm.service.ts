import { $api } from "@/config/axios.config";

import type { LoginResponse, RefreshResponse, RegistrationResponse } from "./slices/auth/auth.interface";
import type { AccurateAuthData } from "./AuthForm.interface";

export const AuthFormService = {
	async registration(registrationBody: AccurateAuthData<"registration">): Promise<RegistrationResponse> {
		const { data: registrationResultData } = await $api.post<RegistrationResponse>("/registration", registrationBody);
		return registrationResultData;
	},

	async login(loginBody: AccurateAuthData<"login">): Promise<LoginResponse> {
		const { data: loginResultData } = await $api.post<LoginResponse>("/login", loginBody);
		return loginResultData;
	},

	async refresh(): Promise<RefreshResponse> {
		const { data: refreshResultData } = await $api.get<RefreshResponse>("/refresh");
		return refreshResultData;
	},

	async logout(): Promise<void> {
		await $api.post("/logout");
	}
};
