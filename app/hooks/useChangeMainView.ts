import { useEffect } from "react";

import { useAppSelector } from "./useRedux";
import { selectViewMain } from "@/modules/ViewSettings";

export const useChangeMainView = (): void => {
	const viewMain = useAppSelector(selectViewMain);

	useEffect(() => {
		if (!viewMain) return;

		document.body.style.background = viewMain.background;

		return () => {
			document.body.style.background = "";
		};
	}, [viewMain]);
};
