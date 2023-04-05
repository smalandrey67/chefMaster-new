import { useEffect, useState } from "react";
import clsx from "clsx";

import { NavbarItem } from "./components/NavbarItem/NavbarItem";
import { navbarItems } from "./Navbar.constants";

import { useAppSelector } from "@/hooks/useRedux";
import { selectViewNavbar } from "../ViewSettings";

import styles from "./Navbar.module.scss";

export function Navbar(): JSX.Element {
	const viewNavbar = useAppSelector(selectViewNavbar);
	const [viewClass, setViewClass] = useState<string>("");

	useEffect(() => {
		setViewClass(viewNavbar.viewClass === "darkNavbarView" ? styles.darkNavbarView : styles.grayView);
	}, [viewNavbar]);

	return (
		<aside className={clsx(styles.menu, viewClass)}>
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
