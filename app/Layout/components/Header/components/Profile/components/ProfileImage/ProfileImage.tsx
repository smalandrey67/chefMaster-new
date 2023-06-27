import Image from "next/image";

import { useAppSelector } from "@/hooks/useRedux";
import { selectUser } from "@/modules/AuthForm";

import { NO_PROFILE_IMAGE } from "@/constants/image.constants";
import type { ProfileImageProps } from "./ProfileImage.interface";

import styles from "./ProfileImage.module.scss";

export function ProfileImage({ changeProfileCardState }: ProfileImageProps): JSX.Element {
	const user = useAppSelector(selectUser);

	return (
		<div className={styles.imageWrapper} onClick={changeProfileCardState}>
			<Image src={user?.avatar ? user?.avatar : NO_PROFILE_IMAGE} fill className={styles.image} alt="profile-image" />
		</div>
	);
}
