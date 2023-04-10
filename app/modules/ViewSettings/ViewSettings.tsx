import { Button } from "chefmaster-ui";

import { MainPersonalize } from "./components/MainPersonalize/MainPersonalize";
import { NavbarPersonalize } from "./components/NavbarPersonalize/NavbarPersonalize";

import { useAppDispatch } from "@/hooks/useRedux";
import { viewActions } from "./slices/view/view";

import styles from "./ViewSettings.module.scss";

export function ViewSettings(): JSX.Element {
	const dispatch = useAppDispatch();

	const saveViewSettings = (): void => {
		dispatch(viewActions.saveViewSettings());
	};

	return (
		<div className={styles.view}>
			<MainPersonalize />
			<NavbarPersonalize />

			<div className={styles.viewSave}>
				<Button isFullWidth onClick={saveViewSettings} name="save">
					Save
				</Button>
			</div>
		</div>
	);
}
