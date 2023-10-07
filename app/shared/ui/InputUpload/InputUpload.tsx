import { forwardRef } from "react";
import Image from "next/image";

import { InputUploadProps } from "./InputUpload.interface";

import styles from "./InputUpload.module.scss";

export const InputUpload = forwardRef<HTMLInputElement, InputUploadProps>(
	({ currentImage, error, ...args }, ref): JSX.Element => {
		return (
			<div className={styles.upload}>
				<div className={styles.uploadImageWrapper}>
					<Image src={currentImage} className={styles.uploadImage} fill alt="avatar" />
				</div>
				<label className={styles.uploadCover}>
					<input className={styles.uploadCoverInput} ref={ref} {...args} />
					<span className={styles.uploadCoverPlus}>+</span>
				</label>
				{error && <span className={styles.uploadValidationError}>{error}</span>}
			</div>
		);
	}
);

InputUpload.displayName = "InputUpload";
