import clsx from "clsx";
import { forwardRef } from "react";

import { InputGroupProps } from "./InputGroup.interface";

import styles from "./InputGroup.module.scss";

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
	({ labelName, error, className, ...args }, ref): JSX.Element => {
		return (
			<label className={styles.label}>
				<input ref={ref} className={clsx(className, [styles.reset, styles.input])} {...args} />
				{error && <span className={styles.inputError}>{error}</span>}
				<p className={styles.labelName}>{labelName}</p>
			</label>
		);
	}
);

InputGroup.displayName = "InputGroup";
