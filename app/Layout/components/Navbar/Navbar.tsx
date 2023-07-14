import { NavbarItem } from "./components/NavbarItem/NavbarItem";
import { useUserExist } from "@/hooks/useUserExist";

import { useAppSelector } from "@/hooks/useRedux";
import { selectViewNavbar } from "@/modules/ViewSettings";
import { navbarItemsBottom, navbarItemsForAuthorizedUser, navbarItemsForNotAuthorizedUser } from "./Navbar.constants";

import styles from "./Navbar.module.scss";

export function Navbar(): JSX.Element {
	const viewNavbar = useAppSelector(selectViewNavbar);
	const isUserExist = useUserExist();

	return (
		<aside className={styles.menu} style={viewNavbar ?? {}}>
			<nav className={styles.menuMiddle}>
				<ul className={styles.list}>
					{isUserExist
						? navbarItemsForAuthorizedUser.map(({ id, ...properties }) => <NavbarItem key={id} {...properties} />)
						: navbarItemsForNotAuthorizedUser.map(({ id, ...properties }) => <NavbarItem key={id} {...properties} />)}
				</ul>
			</nav>

			<nav>
				<ul className={styles.list}>
					{isUserExist && navbarItemsBottom.map(({ id, ...properties }) => <NavbarItem key={id} {...properties} />)}
				</ul>
			</nav>
		</aside>
	);
}
