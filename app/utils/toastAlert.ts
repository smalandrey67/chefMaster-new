import { toast } from "react-toastify";
import { alertOptions } from "@/constants/alert.constants";

export const toastAlert = (message: string, type: "success" | "error"): void => {
	switch (type) {
		case "success":
			toast.success(message, alertOptions);
			break;
		case "error":
			toast.error(message, alertOptions);
			break;
	}
};
