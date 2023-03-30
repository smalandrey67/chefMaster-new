import { useRouter } from "next/router";

import { useAppDispatch } from "@/hooks/useRedux";
import { authThunk } from "../slices/auth/auth.thunk";

import type { SubmitAuthForm } from "../AuthForm.interface";
import type { SubmitHandler } from "react-hook-form";
import type { AuthType } from "@/screens/AuthScreen/AuthScreen.interface";

export const useAuth = (authType: AuthType) => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const auth = {
		registration: (data: SubmitAuthForm): void => {
			dispatch(
				authThunk.registration({
					registrationBody: data,
					navigate: () => router.push("/login")
				})
			);
		},
		login: (data: SubmitAuthForm): void => {
			dispatch(
				authThunk.login({
					loginBody: data,
					navigate: () => router.push("/")
				})
			);
		}
	};

	const submitAuth: SubmitHandler<SubmitAuthForm> = (data): void => {
		auth[authType](data);
	};

	return {
		submitAuth
	};
};
