import { useRouter } from "next/router";
import { Button } from "chefmaster-ui";

import { ProfileImage } from "../ProfileImage/ProfileImage";
import { profileActions } from "@/Layout/components/Header/slices/profile/profile";
import { durationDays, withUsDays } from "@/Layout/components/Header/utils/withUsDays";

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
				{user && (
					<>
						<ProfileImage />
						<div>
							<p className={styles.profileCardName}>
								<strong className={styles.profileCardSubTitle}>name:</strong>
								{user.userName}
							</p>
							<div className={styles.profileCardDays}>
								with us <time dateTime={`P${durationDays(user.createdAt)}D`}>{withUsDays(user.createdAt)}</time>
							</div>
						</div>
					</>
				)}
			</div>
			<div className={styles.profileCardButtons}>
				{user ? (
					<Button className={styles.profileCardButton} isFullWidth onClick={logoutHandler}>
						Log out
					</Button>
				) : (
					<Button className={styles.profileCardButton} isFullWidth onClick={navigateToLoginPage}>
						Log in
					</Button>
				)}
			</div>
		</div>
	);
}
