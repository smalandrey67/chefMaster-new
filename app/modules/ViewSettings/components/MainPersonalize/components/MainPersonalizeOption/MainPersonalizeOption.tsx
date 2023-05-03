import clsx from "clsx";

import { useAppDispatch } from "@/hooks/useRedux";
import { viewActions } from "@/modules/ViewSettings/slices/view/view";

import type { MainPersonalizeOptionProps } from "./MainPersonalizeOption.interface";

import styles from "./MainPersonalizeOption.module.scss";

export function MainPersonalizeOption({ optionView, viewData }: MainPersonalizeOptionProps): JSX.Element {
	const dispatch = useAppDispatch();

	const changeMainView = (): void => {
		dispatch(viewActions.changeMainView(viewData));
	};

	return (
		<button
			className={clsx(styles.backgroundOption, {
				[styles.backgroundOptionDark]: optionView === "dark",
				[styles.backgroundOptionGray]: optionView === "light"
			})}
			onClick={changeMainView}
			name={optionView}
		/>
	);
}
