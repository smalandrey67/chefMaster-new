import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

import { InputGroup, Button } from "chefmaster-ui";
import { SubDetails } from "./components/SubDetails/SubDetails";

import { formValidations } from "@/constants/formValidations";
import { useAuth } from "./hooks/useAuth";

import type { AuthFormProps, SubmitAuthForm } from "./AuthForm.interface";

import styles from "./AuthForm.module.scss";

export function AuthForm({ authType }: AuthFormProps): JSX.Element {
	const { submitAuth } = useAuth(authType);

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<SubmitAuthForm>({ mode: "onBlur" });

	const emailError = errors.email ? String(errors.email.message) : null;
	const passwordError = errors.password ? String(errors.password.message) : null;
	const userNameError = errors.userName ? String(errors.userName.message) : null;

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

			<Button isFullWidth type="submit" name="submit">
				{buttonTitle}
			</Button>

			<SubDetails authType={authType} />
			<ToastContainer role="alert" />
		</form>
	);
}
