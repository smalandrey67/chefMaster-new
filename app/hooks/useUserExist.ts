import { lcs } from "app/shared/lib/lcs/lcs";
import { useState, useEffect } from "react";

export const useUserExist = (): boolean => {
	const [isUserExist, setIsUserExist] = useState<boolean>(true);

	useEffect(() => {
		if (!lcs.getItemWithoutParse<string>("accessToken")) {
			setIsUserExist(false);
		}
	}, []);

	return isUserExist;
};
