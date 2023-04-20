import clsx from "clsx";

import type { NavbarPersonalizeOptionProps } from "./NavbarPersonalizeOption.interface";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

import { viewActions } from "@/modules/ViewSettings/slices/view/view";
import { selectViewNavbar } from "@/modules/ViewSettings/slices/view/view.selectors";

import styles from "./NavbarPersonalizeOption.module.scss";

export function NavbarPersonalizeOption({ optionView, viewData }: NavbarPersonalizeOptionProps): JSX.Element {
	const dispatch = useAppDispatch();
	const viewNavbar = useAppSelector(selectViewNavbar);

	const changeNavbarView = (): void => {
		dispatch(viewActions.changeNavbarView(viewData));
	};

	return (
		<button
			className={clsx(styles.backgroundOption, {
				[styles.backgroundOptionDark]: optionView === "dark",
				[styles.backgroundOptionGray]: optionView === "light"
				// [styles.backgroundOptionSelected]: viewNavbar.viewClass === null
			})}
			onClick={changeNavbarView}
			name={optionView}
		/>
	);
}
