import clsx from "clsx";

import { useAppDispatch } from "@/hooks/useRedux";
import { viewActions } from "@/modules/ViewSettings/slices/view/view";

import type { NavbarPersonalizeOptionProps } from "./NavbarPersonalizeOption.interface";

import styles from "./NavbarPersonalizeOption.module.scss";

export function NavbarPersonalizeOption({ optionView, viewData }: NavbarPersonalizeOptionProps): JSX.Element {
	const dispatch = useAppDispatch();

	const changeNavbarView = (): void => {
		dispatch(viewActions.changeNavbarView(viewData));
	};

	return (
		<button
			className={clsx(styles.backgroundOption, {
				[styles.backgroundOptionDark]: optionView === "dark",
				[styles.backgroundOptionGray]: optionView === "light"
			})}
			onClick={changeNavbarView}
			name={optionView}
		/>
	);
}
