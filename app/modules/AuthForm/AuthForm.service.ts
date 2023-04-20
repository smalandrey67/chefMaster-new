import { api } from "@/configs/axios.config";

import type {
	RegistrationBody,
	LoginBody,
	LoginResponse,
	RefreshResponse,
	RegistrationResponse
} from "./slices/auth/auth.interface";

export const AuthFormService = {
	async registration(registrationBody: RegistrationBody): Promise<RegistrationResponse> {
		const { data: registrationResultData } = await api.post<RegistrationResponse>("/registration", registrationBody);
		return registrationResultData;
	},

	async login(loginBody: LoginBody): Promise<LoginResponse> {
		const { data: loginResultData } = await api.post<LoginResponse>("/login", loginBody);
		return loginResultData;
	},

	async refresh(): Promise<RefreshResponse> {
		const { data: refreshResultData } = await api.get<RefreshResponse>("/refresh");
		return refreshResultData;
	},

	async logout(): Promise<void> {
		await api.post("/logout");
	}
};
