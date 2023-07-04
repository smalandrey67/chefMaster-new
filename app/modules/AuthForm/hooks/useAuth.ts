import { useMemo } from "react";
import { useRouter } from "next/router";

import { toastAlert } from "@/utils/toastAlert";
import { useAppDispatch } from "@/hooks/useRedux";
import { authThunk } from "../slices/auth/auth.thunk";

import type { SubmitAuthForm } from "../AuthForm.interface";
import type { SubmitHandler } from "react-hook-form";
import type { AuthType } from "@/screens/AuthScreen/AuthScreen.interface";

export const useAuth = (authType: AuthType) => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const auth = useMemo(() => {
		return {
			registration: (data: SubmitAuthForm): void => {
				dispatch(
					authThunk.registration({
						registrationBody: data,
						navigate: (): Promise<boolean> => router.push("/login"),
						showErrorAlert: (message: string): void => toastAlert(message, "error")
					})
				);
			},
			login: (data: SubmitAuthForm): void => {
				dispatch(
					authThunk.login({
						loginBody: data,
						navigate: (): Promise<boolean> => router.push("/"),
						showErrorAlert: (message: string): void => toastAlert(message, "error")
					})
				);
			}
		};
	}, [dispatch, router]);

	const submitAuth: SubmitHandler<SubmitAuthForm> = (data): void => {
		auth[authType](data);
	};

	return submitAuth;
};
