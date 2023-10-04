import { useEffect, useRef } from "react";

import { selectUser } from "@/modules/AuthForm";
import { viewSettingsThunk } from "@/modules/ViewSettings";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useLoadAppView = (): void => {
	const user = useAppSelector(selectUser);

	const dispatch = useAppDispatch();
	const loadAppViewsRef = useRef(false);

	useEffect(() => {
		if (user && !loadAppViewsRef.current) {
			dispatch(viewSettingsThunk.getViewSettings(user.id));

			loadAppViewsRef.current = true;
		}
	}, [dispatch, user]);
};
