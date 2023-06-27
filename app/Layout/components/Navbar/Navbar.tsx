import { NavbarItem } from "./components/NavbarItem/NavbarItem";
import { navbarItemsForAuthorizedUser, navbarItemsForNotAuthorizedUser } from "./Navbar.constants";

import { selectViewNavbar } from "@/modules/ViewSettings";
import { useAppSelector } from "@/hooks/useRedux";
import { useUserExist } from "@/hooks/useUserExist";

import styles from "./Navbar.module.scss";

export function Navbar(): JSX.Element {
	const viewNavbar = useAppSelector(selectViewNavbar);
	const isUserExist = useUserExist();

	return (
		<aside className={styles.menu} style={viewNavbar ?? {}}>
			<nav className={styles.menuWrapper}>
				<ul className={styles.list}>
					{isUserExist
						? navbarItemsForAuthorizedUser.map(({ id, ...properties }) => <NavbarItem key={id} {...properties} />)
						: navbarItemsForNotAuthorizedUser.map(({ id, ...properties }) => <NavbarItem key={id} {...properties} />)}
				</ul>
			</nav>
		</aside>
	);
}
