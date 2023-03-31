const emailPattern =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
