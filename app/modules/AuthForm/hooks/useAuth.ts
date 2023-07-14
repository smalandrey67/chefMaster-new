import { useMemo } from "react";
import { useRouter } from "next/router";

import { authThunk } from "../slices/auth/auth.thunk";
import { toastAlert } from "@/utils/toastAlert.util";
import { useAppDispatch } from "@/hooks/useRedux";

import type { AuthType } from "@/screens/AuthScreen/AuthScreen.interface";
import type { SubmitHandler } from "react-hook-form";
import type { AccurateAuthData, AuthFormData } from "../AuthForm.interface";

export const useAuth = (authType: AuthType) => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const auth = useMemo(() => {
		return {
			registration: (registrationData: AccurateAuthData<"registration">): void => {
				dispatch(
					authThunk.registration({
						registrationBody: registrationData,
						navigate: (): Promise<boolean> => router.push("/login"),
						showErrorAlert: (message: string): void => toastAlert(message, "error")
					})
				);
			},
			login: (loginData: AccurateAuthData<"login">): void => {
				dispatch(
					authThunk.login({
						loginBody: loginData,
						navigate: (): Promise<boolean> => router.push("/"),
						showErrorAlert: (message: string): void => toastAlert(message, "error")
					})
				);
			}
		};
	}, [dispatch, router]);

	const submitAuth: SubmitHandler<AuthFormData> = (data): void => {
		auth[authType](data);
	};

	return submitAuth;
};
