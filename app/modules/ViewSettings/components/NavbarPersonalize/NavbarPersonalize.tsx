import { Title } from "@/ui";

import { navbarOptions } from "./NavbarPersonalize.constants";
import { NavbarPersonalizeOption } from "./components/NavbarPersonalizeOption/NavbarPersonalizeOption";

import styles from "./NavbarPersonalize.module.scss";

export function NavbarPersonalize(): JSX.Element {
	return (
		<div className={styles.navbar}>
			<Title variant="small">Navbar</Title>

			<div className={styles.navbarOptions}>
				{navbarOptions.map(({ id, ...properties }) => (
					<NavbarPersonalizeOption key={id} {...properties} />
				))}
			</div>
		</div>
	);
}
