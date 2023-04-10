import { useForm } from "react-hook-form";
import { Title, InputGroup, Button } from "chefmaster-ui";

import { formValidations } from "@/constants/formValidations";
import { useNameUpdate } from "./hooks/useNameUpdate";

import type { SubmitNameUpdateForm } from "./NameUpdate.interface";

import styles from "./NameUpdate.module.scss";

export function NameUpdate(): JSX.Element {
	const {
		register,
		formState: { errors, isDirty, isValid },
		handleSubmit,
		reset
	} = useForm<SubmitNameUpdateForm>({ mode: "onBlur" });
	const { updateName, currentUserName } = useNameUpdate(reset);

	const updatedUserName = errors.updatedUserName ? String(errors.updatedUserName.message) : null;

	return (
		<form className={styles.name} onSubmit={handleSubmit(updateName)}>
			<Title variant="small">Update name:</Title>
			<InputGroup
				labelName="current name:"
				type="text"
				autoComplete="username"
				disabled
				value={currentUserName}
				name="current-userName"
			/>
			<InputGroup
				labelName="updated name:"
				type="text"
				autoComplete="username"
				error={updatedUserName}
				{...register("updatedUserName", formValidations.userName)}
			/>

			<div className={styles.nameUpdate}>
				<Button isFullWidth type="submit" name="update" disabled={!isDirty || !isValid}>
					update
				</Button>
			</div>
		</form>
	);
}
