import { Recipes } from "@/modules/Recipes";

import { useAppSelector } from "@/hooks/useRedux";
import { selectFavoritesRecipes } from "@/modules/MakeRecipeFavorite/slices/favorites/favorites.selectors";

export function FavoritesScreen(): JSX.Element {
	const favorites = useAppSelector(selectFavoritesRecipes);

	return <Recipes recipes={favorites} moduleTitle="Favorites" isSeeAll={false} />;
}
