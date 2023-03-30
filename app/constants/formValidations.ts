const emailPattern =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const formValidations = {
	email: {
		required: "Field is required",
		pattern: { value: emailPattern, message: "Not valid email" }
	},
	password: {
		required: "Field is required",
		minLength: { value: 9, message: "Min 3 symbols" },
		maxLength: { value: 32, message: "Min 32 symbols" }
	}
};
