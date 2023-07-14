import { BsFillSuitHeartFill } from "react-icons/bs";

import { useToggleFavoriteRecipe } from "./hooks/useToggleFavoriteRecipe";
import { useGetHeartColor } from "./hooks/useGetHeartColor";

import type { MakeRecipeFavoriteProps } from "./MakeRecipeFavorite.interface";

import styles from "./MakeRecipeFavorite.module.scss";

export function MakeRecipeFavorite({
	_id,
	title,
	image,
	cookTime,
	cookLevel,
	rating,
	category
}: MakeRecipeFavoriteProps): JSX.Element {
	const { toggleRecipeInFavoriteList } = useToggleFavoriteRecipe({ _id, title, image, cookTime, cookLevel, rating, category });
	const currentHeartColor = useGetHeartColor(_id);

	return (
		<div className={styles.favorite}>
			<button
				className={styles.favoriteHeart}
				onClick={toggleRecipeInFavoriteList}
				name="heart"
				aria-label="toggle this recipe in favorite list"
			>
				<BsFillSuitHeartFill size={30} color={currentHeartColor} />
			</button>
		</div>
	);
}
