import { useRouter } from "next/router";
import { Button } from "chefmaster-ui";

import { ProfileImage } from "../ProfileImage/ProfileImage";
import { profileActions } from "@/modules/Header/slices/profile/profile";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { authThunk } from "@/modules/AuthForm";
import { selectUser } from "@/modules/AuthForm/slices/auth/auth.selectors";

import styles from "./ProfileCard.module.scss";

export function ProfileCard(): JSX.Element {
	const user = useAppSelector(selectUser);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const logoutHandler = (): void => {
		dispatch(authThunk.logout());
		navigateToLoginPage();
	};

	const navigateToLoginPage = (): void => {
		dispatch(profileActions.closeProfileCard());
		router.push("/login");
	};

	return (
		<div className={styles.profileCard}>
			<ProfileImage />
			<div className={styles.profileCardUser}>
				<p className={styles.profileCardUserInfo}>
					<strong className={styles.profileCardUserSubTitle}>email:</strong>
					{user ? user.email : "no email"}
				</p>
			</div>
			<div className={styles.profileCardButtons}>
				{!!user || (
					<Button className={styles.profileCardButton} isFullWidth onClick={navigateToLoginPage}>
						Log in
					</Button>
				)}
				{!!user && (
					<Button className={styles.profileCardButton} isFullWidth onClick={logoutHandler}>
						Log out
					</Button>
				)}
			</div>
		</div>
	);
}
