import { NavbarItem } from "./components/NavbarItem/NavbarItem";
import { navbarItems } from "./Navbar.constants";

import { useAppSelector } from "@/hooks/useRedux";
import { selectViewNavbar } from "../ViewSettings";

import styles from "./Navbar.module.scss";

export function Navbar(): JSX.Element {
	const viewNavbar = useAppSelector(selectViewNavbar);

	return (
		<aside className={styles.menu} style={viewNavbar ?? {}}>
			<nav className={styles.menuWrapper}>
				<ul className={styles.list}>
					{navbarItems.map(({ id, ...properties }) => (
						<NavbarItem key={id} {...properties} />
					))}
				</ul>
			</nav>
		</aside>
	);
}
