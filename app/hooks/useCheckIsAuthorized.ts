import { useEffect, useRef } from "react";

import { useAppDispatch } from "./useRedux";
import { authThunk } from "@/modules/AuthForm";

export const useCheckIsAuthorized = (): void => {
	const dispatch = useAppDispatch();
	const loadRef = useRef(false);

	useEffect(() => {
		if (localStorage.getItem("accessToken") && !loadRef.current) {
			dispatch(authThunk.checkIsAuthorized());
			loadRef.current = true;
		}
	}, [dispatch]);
};
