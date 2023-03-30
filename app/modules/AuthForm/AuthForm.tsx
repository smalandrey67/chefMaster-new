import { useForm } from "react-hook-form";
import { InputGroup, Button } from "chefmaster-ui";

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
	const buttonTitle = authType === "registration" ? "Sign up" : "Log in";

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitAuth)}>
			<InputGroup labelName="email:" type="text" {...register("email", formValidations.email)} error={emailError} />
			<InputGroup
				labelName="password:"
				type="password"
				{...register("password", formValidations.password)}
				error={passwordError}
			/>
			<Button isFullWidth type="submit" name="submit">
				{buttonTitle}
			</Button>
		</form>
	);
}
