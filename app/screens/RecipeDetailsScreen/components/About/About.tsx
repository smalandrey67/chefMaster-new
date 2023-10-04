import { Title, IconMarker } from "chefmaster-ui";
import { AiFillClockCircle, AiFillStar, AiFillFire } from "react-icons/ai";

import type { AboutProps } from "./About.interface";

import styles from "./About.module.scss";

export function About({ title, cookTime, rating, cookLevel }: AboutProps): JSX.Element {
	return (
		<div className={styles.about}>
			<div className={styles.aboutHeader}>
				<Title variant="big" className={styles.aboutTitle}>
					{title}
				</Title>
				<div className={styles.aboutRating}>
					<IconMarker Icon={AiFillStar} label={rating} iconColor="#212121" iconSize={22} />
				</div>
			</div>
			<div className={styles.aboutMarkers}>
				<IconMarker Icon={AiFillClockCircle} label={cookTime} iconColor="#c0c0c0" iconSize={20} />
				<IconMarker Icon={AiFillFire} label={cookLevel} iconColor="#c0c0c0" iconSize={20} />
			</div>
			<div className={styles.aboutDivider}></div>
		</div>
	);
}
