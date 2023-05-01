import Image from "next/image";

import { NO_PROFILE_IMAGE } from "./ProfileImage.constants";
import type { ProfileImageProps } from "./ProfileImage.interface";

import styles from "./ProfileImage.module.scss";

export function ProfileImage({ changeProfileCardState }: ProfileImageProps): JSX.Element {
	return (
		<div className={styles.imageWrapper} onClick={changeProfileCardState}>
			<Image src={NO_PROFILE_IMAGE} fill className={styles.image} alt="profile-image" />
		</div>
	);
}
