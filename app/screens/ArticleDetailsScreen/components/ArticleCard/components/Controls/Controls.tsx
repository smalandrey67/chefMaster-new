import { useState } from "react";

import { BsFillSuitHeartFill } from "react-icons/bs";

import type { ControlsProps } from "./Controls.interface";

import styles from "./Controls.module.scss";

export function Controls({ likes }: ControlsProps): JSX.Element {
	const [isLiked, setIsLiked] = useState<boolean>(false);

	const toggleLiked = (): void => {
		setIsLiked((prevIsLiked) => !prevIsLiked);
	};

	return (
		<div className={styles.controls}>
			<button className={styles.controlsHeart} onClick={toggleLiked}>
				<BsFillSuitHeartFill size={30} color={isLiked ? "red" : "black"} />
			</button>
			<div className={styles.controlsLikes}>
				{likes}
				<span className={styles.controlsLikesText}>likes</span>
			</div>
		</div>
	);
}
