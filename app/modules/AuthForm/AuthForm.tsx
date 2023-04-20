import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

import { InputGroup, Button } from "chefmaster-ui";
import { SubDetails } from "./components/SubDetails/SubDetails";

import { formValidations } from "@/constants/formValidations.constants";
import { useAuth } from "./hooks/useAuth";

import type { AuthFormProps, SubmitAuthForm } from "./AuthForm.interface";

import styles from "./AuthForm.module.scss";

export function AuthForm({ authType }: AuthFormProps): JSX.Element {
	const { submitAuth } = useAuth(authType);
	const {
		register,
		formState: { errors, isDirty, isValid },
		handleSubmit
	} = useForm<SubmitAuthForm>({ mode: "onBlur" });

	const userNameError = errors.userName ? errors.userName.message : null;
	const emailError = errors.email ? errors.email.message : null;
	const passwordError = errors.password ? errors.password.message : null;

	const isRegistration = authType === "registration";
	const buttonTitle = isRegistration ? "Sign up" : "Log in";
	const passwordAutoComplete = isRegistration ? "new-password" : "current-password";

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitAuth)}>
			{isRegistration && (
				<InputGroup
					labelName="userName:"
					type="text"
					{...register("userName", formValidations.userName)}
					error={userNameError}
					autoComplete="username"
				/>
			)}

			<InputGroup
				labelName="email:"
				type="email"
				{...register("email", formValidations.email)}
				error={emailError}
				autoComplete="email"
			/>
			<InputGroup
				labelName="password:"
				type="password"
				{...register("password", formValidations.password)}
				error={passwordError}
				autoComplete={passwordAutoComplete}
			/>

			<Button isFullWidth type="submit" name="submit" disabled={!isDirty || !isValid}>
				{buttonTitle}
			</Button>

			<SubDetails authType={authType} />
			<ToastContainer role="alert" />
		</form>
	);
}
