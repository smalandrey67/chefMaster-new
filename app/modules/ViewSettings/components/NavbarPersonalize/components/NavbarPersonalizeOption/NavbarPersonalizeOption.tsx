import clsx from "clsx";

import type { NavbarPersonalizeOptionProps } from "./NavbarPersonalizeOption.interface";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

import { viewActions } from "@/modules/ViewSettings/slices/view/view";
import { selectViewNavbar } from "@/modules/ViewSettings/slices/view/view.selectors";

import styles from "./NavbarPersonalizeOption.module.scss";

export function NavbarPersonalizeOption({ value, viewClass }: NavbarPersonalizeOptionProps): JSX.Element {
	const dispatch = useAppDispatch();
	const viewNavbar = useAppSelector(selectViewNavbar);

	const changeNavbarView = (): void => {
		dispatch(viewActions.changeNavbarView({ viewClass }));
	};

	return (
		<button
			className={clsx(styles.backgroundOption, {
				[styles.backgroundOptionDark]: value === "dark",
				[styles.backgroundOptionGray]: value === "gray",
				[styles.backgroundOptionSelected]: viewNavbar.viewClass === viewClass
			})}
			onClick={changeNavbarView}
			name={value}
		/>
	);
}
