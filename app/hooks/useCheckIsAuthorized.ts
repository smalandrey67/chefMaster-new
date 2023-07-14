import { useEffect, useRef } from "react";

import { lcs } from "@/utils/localStorage.util";
import { authThunk } from "@/modules/AuthForm";
import { useAppDispatch } from "./useRedux";

export const useCheckIsAuthorized = (): void => {
	const dispatch = useAppDispatch();
	const loadUserRef = useRef(false);

	useEffect(() => {
		if (lcs.getItemWithoutParse<string>("accessToken") && !loadUserRef.current) {
			dispatch(authThunk.checkIsAuthorized());

			loadUserRef.current = true;
		}
	}, [dispatch]);
};
