import { useRouter } from "next/router";
import { Button } from "chefmaster-ui";

import { ProfileImage } from "../ProfileImage/ProfileImage";
import { useAppDispatch } from "@/hooks/useRedux";
import { profileActions } from "@/modules/Header/slices/profile/profile";

import styles from "./ProfileCard.module.scss";

export function ProfileCard(): JSX.Element {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const logOut = (): void => {
		dispatch(profileActions.closeProfileCard());
	};

	const navigateToLoginPage = (): void => {
		router.push("/login");
		dispatch(profileActions.closeProfileCard());
	};

	return (
		<div className={styles.profileCard}>
			<ProfileImage />
			<div className={styles.profileCardUser}>
				<p className={styles.profileCardUserInfo}>
					<strong className={styles.profileCardUserSubTitle}>name:</strong>
					andrew
				</p>
				<p className={styles.profileCardUserInfo}>
					<strong className={styles.profileCardUserSubTitle}>email:</strong>
					smalandrey67@ukr.net
				</p>
			</div>
			<div className={styles.profileCardButtons}>
				<Button className={styles.profileCardButton} isFullWidth onClick={navigateToLoginPage}>
					Log in
				</Button>
				<Button className={styles.profileCardButton} isFullWidth onClick={logOut}>
					Log out
				</Button>
			</div>
		</div>
	);
}
