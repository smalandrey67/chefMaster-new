import { emailPattern } from "@/constants/email.constants";

export const formValidations = {
	email: {
		required: "Field is required",
		pattern: { value: emailPattern, message: "Not valid email" }
	},
	password: {
		required: "Field is required",
		minLength: { value: 9, message: "Min 9 symbols" },
		maxLength: { value: 32, message: "Max 32 symbols" }
	},
	userName: {
		required: "Field is required",
		minLength: { value: 3, message: "Min 3 symbols" },
		maxLength: { value: 15, message: "Max 15 symbols" }
	}
};
