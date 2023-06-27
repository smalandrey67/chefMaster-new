import { type ChangeEvent, useState } from "react";

export const useAvatarUpdateLocal = () => {
	const [localAvatar, setLocalAvatar] = useState<string | ArrayBuffer | null>("");

	const changeAvatarLocal = (event: ChangeEvent<HTMLInputElement>): void => {
		const reader = new FileReader();
		const file = event.target.files?.[0];

		if (!file) return;

		reader.readAsDataURL(file);

		reader.onload = (readerEvent): void => {
			if (!readerEvent.target) return;

			setLocalAvatar(readerEvent.target.result);
		};
	};

	return { localAvatar, changeAvatarLocal };
};
