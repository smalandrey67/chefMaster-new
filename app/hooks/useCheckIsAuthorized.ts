import { useEffect, useRef } from "react";

import { useAppDispatch } from "./useRedux";
import { authThunk } from "@/modules/AuthForm";

export const useCheckIsAuthorized = (): void => {
	const dispatch = useAppDispatch();
	const loadUserRef = useRef(false);

	useEffect(() => {
		if (localStorage.getItem("accessToken") && !loadUserRef.current) {
			dispatch(authThunk.checkIsAuthorized());

			loadUserRef.current = true;
		}
	}, [dispatch]);
};
