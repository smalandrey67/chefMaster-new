import { InputGroup, Button } from "chefmaster-ui";

import styles from "./AuthForm.module.scss";

export function AuthForm(): JSX.Element {
	return (
		<form className={styles.form}>
			<InputGroup labelName="email:" type="email" name="email" />
			<InputGroup labelName="password:" type="text" />
			<Button isFullWidth type="submit" name="submit">
				Login
			</Button>
		</form>
	);
}
