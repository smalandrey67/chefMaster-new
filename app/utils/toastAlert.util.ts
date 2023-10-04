import { toast } from "react-toastify";
import { toastOptions } from "@/config/toast.config";

export const toastAlert = (message: string, type: "success" | "error"): void => {
	switch (type) {
		case "success": {
			toast.success(message, toastOptions);
			break;
		}
		case "error": {
			toast.error(message, toastOptions);
			break;
		}
	}
};
