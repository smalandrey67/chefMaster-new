import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { ProfileImage } from "./components/ProfileImage/ProfileImage";

import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { selectIsProfileCardOpen } from "../../slices/profile/profile.selectors";
import { profileActions } from "../../slices/profile/profile";

export function Profile(): JSX.Element {
	const dispatch = useAppDispatch();
	const isProfileCardOpen = useAppSelector(selectIsProfileCardOpen);

	const openProfileCard = (): void => {
		dispatch(profileActions.toggleProfileCard());
	};

	return (
		<>
			<ProfileImage changeProfileCardState={openProfileCard} />
			{isProfileCardOpen && <ProfileCard />}
		</>
	);
}
