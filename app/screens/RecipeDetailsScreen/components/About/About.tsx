import { Title, IconMarker } from "chefmaster-ui";
import { AiFillClockCircle, AiFillStar, AiFillFire } from "react-icons/ai";

import type { AboutProps } from "./About.interface";

import styles from "./About.module.scss";

export function About({ aboutData }: AboutProps): JSX.Element {
	return (
		<div className={styles.about}>
			<div className={styles.aboutHeader}>
				<Title variant="big" className={styles.aboutTitle}>
					{aboutData.title}
				</Title>
				<div className={styles.aboutRating}>
					<IconMarker Icon={AiFillStar} label={String(4.5)} iconColor="var(--neon-10)" iconSize={20} />
				</div>
			</div>
			<div className={styles.aboutMarkers}>
				<IconMarker Icon={AiFillClockCircle} label={aboutData.cookTime} iconColor="var(--light-20)" iconSize={20} />
				<IconMarker Icon={AiFillFire} label={aboutData.cookLevel} iconColor="var(--light-20)" iconSize={20} />
			</div>
			<div className={styles.aboutDivider}></div>
		</div>
	);
}
