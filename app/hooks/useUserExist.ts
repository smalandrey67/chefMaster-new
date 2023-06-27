import { useState, useEffect } from "react";

export const useUserExist = (): boolean => {
	const [isUserExist, setIsUserExist] = useState<boolean>(true);

	useEffect(() => {
		if (typeof window === "undefined") return;

		if (!localStorage.getItem("accessToken")) {
			setIsUserExist(false);
		}
	}, []);

	return isUserExist;
};
