import { Title, IconMarker } from "chefmaster-ui";

import { markers } from "./About.constants";
import type { AboutProps } from "./About.interface";

import styles from "./About.module.scss";

export function About({ aboutData }: AboutProps): JSX.Element {
	return (
		<>
			<div className={styles.about}>
				<Title variant="big" className={styles.aboutTitle}>
					{aboutData.title}
				</Title>
				<div className={styles.aboutMarkers}>
					{markers.map(({ id, ...marker }) => (
						<IconMarker key={id} {...marker} />
					))}
				</div>
			</div>
			<hr />
		</>
	);
}
