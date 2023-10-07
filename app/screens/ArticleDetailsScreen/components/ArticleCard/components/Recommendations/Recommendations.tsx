import clsx from "clsx";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import styles from "./Recommendations.module.scss";

export function Recommendations({ image }: { image: string }): JSX.Element {
	const [sliderRef] = useKeenSlider({
		loop: true,
		slides: { perView: 2.5, spacing: 10 }
	});

	return (
		<div className={styles.recommendations}>
			<div ref={sliderRef} className="keen-slider">
				<div className={clsx("keen-slider__slide", styles.recommendationsSlide)}>
					<Image src={image} className={styles.recommendationsSlideImage} fill alt="test" />
				</div>
				<div className={clsx("keen-slider__slide", styles.recommendationsSlide)}>
					<Image src={image} className={styles.recommendationsSlideImage} fill alt="test" />
				</div>
				<div className={clsx("keen-slider__slide", styles.recommendationsSlide)}>
					<Image src={image} className={styles.recommendationsSlideImage} fill alt="test" />
				</div>
			</div>
		</div>
	);
}
