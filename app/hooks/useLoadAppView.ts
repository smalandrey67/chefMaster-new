import { useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "./useRedux";
import { viewSettingsThunk } from "@/modules/ViewSettings";
import { selectUser } from "@/modules/AuthForm";

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
