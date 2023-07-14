import { useForm } from "react-hook-form";
import { InputGroup, Button } from "chefmaster-ui";

import { useAuth } from "./hooks/useAuth";
import { AuthFormToggle } from "./components/AuthFormToggle/AuthFormToggle";
import { formValidations } from "@/configs/form.config";

import type { AuthFormProps, AuthFormData } from "./AuthForm.interface";

import styles from "./AuthForm.module.scss";

export function AuthForm({ authType }: AuthFormProps): JSX.Element {
	const {
		register,
		formState: { errors, isDirty, isValid, isSubmitting },
		handleSubmit
	} = useForm<AuthFormData>({ mode: "onBlur" });

	const submitAuth = useAuth(authType);

	const userNameValidationError = errors.userName && errors.userName.message;
	const emailValidationError = errors.email && errors.email.message;
	const passwordValidationError = errors.password && errors.password.message;

	const isRegistration = authType === "registration";
	const authButtonTitle = isRegistration ? "Sign up" : "Log in";
	const passwordAutoComplete = isRegistration ? "new-password" : "current-password";

	const isDisabledSubmitButton = !isDirty || !isValid || isSubmitting;

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitAuth)}>
			{isRegistration && (
				<InputGroup
					labelName="userName:"
					type="text"
					{...register("userName", formValidations.userName)}
					error={userNameValidationError}
					autoComplete="username"
					aria-invalid={!!userNameValidationError}
				/>
			)}

			<InputGroup
				labelName="email:"
				type="email"
				{...register("email", formValidations.email)}
				error={emailValidationError}
				autoComplete="email"
				aria-invalid={!!emailValidationError}
			/>
			<InputGroup
				labelName="password:"
				type="password"
				{...register("password", formValidations.password)}
				error={passwordValidationError}
				autoComplete={passwordAutoComplete}
				aria-invalid={!!passwordValidationError}
			/>

			<Button isFullWidth type="submit" name="submit" disabled={isDisabledSubmitButton}>
				{authButtonTitle}
			</Button>

			<AuthFormToggle authType={authType} />
		</form>
	);
}
