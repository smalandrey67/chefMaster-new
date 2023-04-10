import { useRouter } from "next/router";
import { Button } from "chefmaster-ui";

import { ProfileImage } from "../ProfileImage/ProfileImage";
import { profileActions } from "@/modules/Header/slices/profile/profile";
import { withUsDays } from "@/modules/Header/utils/withUsDays";

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
		router.push("/login");
		dispatch(profileActions.closeProfileCard());
	};

	return (
		<div className={styles.profileCard}>
			<div className={styles.profileCardHead}>
				<ProfileImage />
				{user && <div className={styles.profileCardDays}> with us {withUsDays(user.createdAt)}</div>}
			</div>
			<div className={styles.profileCardUser}>
				<p className={styles.profileCardUserInfo}>
					<strong className={styles.profileCardUserSubTitle}>email:</strong>
					{user ? user.email : ""}
				</p>
				<p className={styles.profileCardUserInfo}>
					<strong className={styles.profileCardUserSubTitle}>name:</strong>
					{user ? user.userName : ""}
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
