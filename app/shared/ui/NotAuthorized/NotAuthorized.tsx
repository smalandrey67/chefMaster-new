import Image from "next/image";

import styles from "./NotAuthorized.module.scss";

export function NotAuthorized(): JSX.Element {
	return (
		<div className={styles.notAuthorized}>
			<Image
				src="https://lh3.googleusercontent.com/Sy6Dgzqt3yHt4wZcOJoVFf_5wJhSzbIwcb701mbrnYaaJMaAnS8O5g0Bc1gIJ_UAb3N0zJT_o_-RRApYHvUgTU9VwzWpVwYFP7ZNrU2h6Okvp73Y22AHPlnQclpb8mSytweHW8slQQ=s100-p-k"
				className="notAuthorized__image"
				width={100}
				height={100}
				alt="man shrugging"
			/>
			Not Authorized
		</div>
	);
}
