import { useForm } from "react-hook-form";
import { Button, InputGroup, Title } from "chefmaster-ui";

import { formValidations } from "@/constants/formValidations";
import { useEmailUpdate } from "./hooks/useEmailUpdate";

import type { SubmitEmailUpdateForm } from "./EmailUpdate.interface";

import styles from "./EmailUpdate.module.scss";

export function EmailUpdate(): JSX.Element {
	const {
		register,
		formState: { errors, isDirty, isValid },
		handleSubmit,
		reset
	} = useForm<SubmitEmailUpdateForm>({ mode: "onBlur" });
	const { updateEmail, currentEmail } = useEmailUpdate(reset);

	const updatedEmailError = errors.updatedEmail ? String(errors.updatedEmail.message) : null;

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
				autoComplete="email"
				error={updatedEmailError}
				{...register("updatedEmail", formValidations.email)}
			/>

			<div className={styles.emailUpdate}>
				<Button isFullWidth type="submit" name="update" disabled={!isDirty || !isValid}>
					update
				</Button>
			</div>
		</form>
	);
}
