import { useEffect } from "react";

import { useAppSelector } from "./useRedux";
import { selectViewMain } from "@/modules/ViewSettings";

export const useChangeMainView = (): void => {
	const viewMain = useAppSelector(selectViewMain);

	useEffect(() => {
		document.body.classList.add(viewMain.viewClass);
		return () => document.body.classList.remove(viewMain.viewClass);
	}, [viewMain]);
};
