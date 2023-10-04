import { useForm } from "react-hook-form";
import { Button, Title, InputUpload } from "chefmaster-ui/dist";

import { selectUser } from "@/modules/AuthForm";
import { useAppSelector } from "@/hooks/useRedux";

import { useAvatarUpdateLocal } from "./hooks/useAvatarUpdateLocal";
import { useAvatarUpdate } from "./hooks/useAvatarUpdate";
import { NO_PROFILE_IMAGE } from "@/constants/images.constants";

import type { SubmitAvatarUpdateForm } from "./AvatarUpdate.interface";

import styles from "./AvatarUpdate.module.scss";

export function AvatarUpdate(): JSX.Element {
	const {
		register,
		formState: { errors, isDirty, isValid, isSubmitting },
		handleSubmit,
		reset
	} = useForm<SubmitAvatarUpdateForm>({ mode: "onBlur" });

	const user = useAppSelector(selectUser);

	const { localAvatar, changeAvatarLocal } = useAvatarUpdateLocal();
	const updateAvatar = useAvatarUpdate(reset);

	const updatedAvatarError = errors.avatar && errors.avatar.message;
	const isDisabledSubmitButton = !isDirty || !isValid || isSubmitting;
	const currentAvatar = localAvatar ? String(localAvatar) : user?.avatar ? user.avatar : NO_PROFILE_IMAGE;

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
				currentImage={currentAvatar}
			/>
			<div className={styles.avatarUpdate}>
				<Button isFullWidth type="submit" name="update" disabled={isDisabledSubmitButton}>
					update
				</Button>
			</div>
		</form>
	);
}
