import { useForm } from "react-hook-form";
import { InputGroup, Button } from "chefmaster-ui";

import { SubDetails } from "./components/SubDetails/SubDetails";

import { formValidations } from "@/configs/form.config";
import { useAuth } from "./hooks/useAuth";

import type { AuthFormProps, SubmitAuthForm } from "./AuthForm.interface";

import styles from "./AuthForm.module.scss";

export function AuthForm({ authType }: AuthFormProps): JSX.Element {
	const {
		register,
		formState: { errors, isDirty, isValid, isSubmitting },
		handleSubmit
	} = useForm<SubmitAuthForm>({ mode: "onBlur" });

	const submitAuth = useAuth(authType);

	const userNameError = errors.userName && errors.userName.message;
	const emailError = errors.email && errors.email.message;
	const passwordError = errors.password && errors.password.message;

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
					error={userNameError}
					autoComplete="username"
					aria-invalid={!!userNameError}
				/>
			)}

			<InputGroup
				labelName="email:"
				type="email"
				{...register("email", formValidations.email)}
				error={emailError}
				autoComplete="email"
				aria-invalid={!!emailError}
			/>
			<InputGroup
				labelName="password:"
				type="password"
				{...register("password", formValidations.password)}
				error={passwordError}
				autoComplete={passwordAutoComplete}
				aria-invalid={!!passwordError}
			/>

			<Button isFullWidth type="submit" name="submit" disabled={isDisabledSubmitButton}>
				{authButtonTitle}
			</Button>

			<SubDetails authType={authType} />
		</form>
	);
}
