import clsx from "clsx";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { viewActions } from "@/modules/ViewSettings/slices/view/view";
import { selectViewMain } from "@/modules/ViewSettings/slices/view/view.selectors";

import type { MainPersonalizeOptionProps } from "./MainPersonalizeOption.interface";

import styles from "./MainPersonalizeOption.module.scss";

export function MainPersonalizeOption({ value, viewClass }: MainPersonalizeOptionProps): JSX.Element {
	const dispatch = useAppDispatch();
	const viewMain = useAppSelector(selectViewMain);

	const changeMainView = (): void => {
		dispatch(viewActions.changeMainView({ viewClass }));
	};

	return (
		<button
			className={clsx(styles.backgroundOption, {
				[styles.backgroundOptionDark]: value === "dark",
				[styles.backgroundOptionGray]: value === "gray",
				[styles.backgroundOptionSelected]: viewMain.viewClass === viewClass
			})}
			onClick={changeMainView}
			name={value}
		/>
	);
}
