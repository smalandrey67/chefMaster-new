import { useForm } from "react-hook-form";
import { Button, InputGroup, Title } from "chefmaster-ui";

import { formValidations } from "@/constants/formValidations.constants";
import { useEmailUpdate } from "./hooks/useEmailUpdate";

import type { SubmitEmailUpdateForm } from "./EmailUpdate.interface";

import styles from "./EmailUpdate.module.scss";

export function EmailUpdate(): JSX.Element {
	const {
		register,
		formState: { errors, isDirty, isValid, isSubmitting },
		handleSubmit,
		reset
	} = useForm<SubmitEmailUpdateForm>({ mode: "onBlur" });
	const { updateEmail, currentEmail } = useEmailUpdate(reset);

	const updatedEmailError = errors.updatedEmail ? errors.updatedEmail.message : null;
	const isDisabledSubmitButton = !isDirty || !isValid || isSubmitting;

	return (
		<form className={styles.email} onSubmit={handleSubmit(updateEmail)}>
			<Title variant="small">Update email:</Title>
			<InputGroup
				labelName="current email:"
				type="email"
				autoComplete="email"
				disabled
				value={currentEmail}
				name="current-email"
			/>
			<InputGroup
				labelName="updated email:"
				type="email"
				{...register("updatedEmail", formValidations.email)}
				error={updatedEmailError}
				autoComplete="email"
				aria-invalid={!!updatedEmailError}
			/>

			<div className={styles.emailUpdate}>
				<Button isFullWidth type="submit" name="update" disabled={isDisabledSubmitButton}>
					update
				</Button>
			</div>
		</form>
	);
}
