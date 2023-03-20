import { Title } from "chefmaster-ui";
import { IconMarker } from "chefmaster-ui";
import { AiFillClockCircle, AiFillStar, AiFillFire } from "react-icons/ai";

import type { AboutProps } from "./About.interface";

import styles from "./About.module.scss";

export function About({ title, cookTime, rating, cookLevel }: AboutProps): JSX.Element {
	return (
		<div className={styles.about}>
			<Title variant="big" className={styles.aboutTitle}>
				{title}
			</Title>
			<div className={styles.aboutMarkers}>
				<IconMarker Icon={AiFillClockCircle} label={cookTime} iconColor="var(--neon-10)" iconSize={18} />
				<IconMarker Icon={AiFillStar} label={rating + " rating"} iconColor="var(--neon-10)" iconSize={18} />
				<IconMarker Icon={AiFillFire} label={cookLevel} iconColor="var(--neon-10)" iconSize={18} />
			</div>
		</div>
	);
}
