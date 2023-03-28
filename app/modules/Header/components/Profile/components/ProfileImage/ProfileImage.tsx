import Image from "next/image";

import type { ProfileImageProps } from "./ProfileImage.interface";

import styles from "./ProfileImage.module.scss";

export function ProfileImage({ changeProfileCardState }: ProfileImageProps): JSX.Element {
	return (
		<div className={styles.imageWrapper} onClick={changeProfileCardState}>
			<Image
				src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
				fill={true}
				className={styles.image}
				alt="profile-image"
			/>
		</div>
	);
}
