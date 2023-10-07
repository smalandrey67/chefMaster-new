import { Title, InputUpload, Button } from "@/ui";
import { useForm } from "react-hook-form";

import { useAvatarUpdate } from "./hooks/useAvatarUpdate";
import { NO_PROFILE_IMAGE } from "@/constants/images.constants";
import { useAvatarUpdateLocal } from "./hooks/useAvatarUpdateLocal";

import type { SubmitAvatarUpdateForm } from "./AvatarUpdate.interface";

import styles from "./AvatarUpdate.module.scss";

export function AvatarUpdate(): JSX.Element {
	const {
		register,
		formState: { errors, isDirty, isValid, isSubmitting },
		handleSubmit,
		reset
	} = useForm<SubmitAvatarUpdateForm>({ mode: "onBlur" });

	const { updateAvatar, currentAvatar } = useAvatarUpdate(reset);
	const { changeAvatarLocal, localAvatar } = useAvatarUpdateLocal();

	const avatar = localAvatar ? String(localAvatar) : currentAvatar ? currentAvatar : NO_PROFILE_IMAGE;
	const updatedAvatarError = errors.avatar && errors.avatar.message;
	const isDisabledSubmitButton = !isDirty || !isValid || isSubmitting;

	return (
		<form className={styles.avatar} onSubmit={handleSubmit(updateAvatar)}>
			<Title variant="small">Update avatar:</Title>
			<InputUpload
				type="file"
				accept="image/*"
				{...register("avatar", {
					onChange: changeAvatarLocal
				})}
				error={updatedAvatarError}
				aria-invalid={!!updatedAvatarError}
				currentImage={avatar}
			/>
			<div className={styles.avatarUpdate}>
				<Button isFullWidth type="submit" name="update" disabled={isDisabledSubmitButton}>
					update
				</Button>
			</div>
		</form>
	);
}
