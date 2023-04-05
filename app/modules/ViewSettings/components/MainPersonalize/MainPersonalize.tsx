import { MainPersonalizeOption } from "./components/MainPersonalizeOption/MainPersonalizeOption";
import { Title } from "chefmaster-ui";

import { mainOptions } from "./MainPersonalize.constants";

import styles from "./MainPersonalize.module.scss";

export function MainPersonalize(): JSX.Element {
	return (
		<div className={styles.background}>
			<Title variant="small">Main</Title>

			<div className={styles.backgroundOptions}>
				{mainOptions.map(({ id, ...properties }) => (
					<MainPersonalizeOption key={id} {...properties} />
				))}
			</div>
		</div>
	);
}
