import { HomeScreenService } from "./HomeScreen.service";

export const HomeScreenController = {
	async getRequestModules() {
		const [popularRecipes, articles] = await Promise.all([
			HomeScreenService.getPopularRecipes(),
			HomeScreenService.getArticles({ _limit: 4 })
		]);

		return {
			props: { popularRecipes, articles }
		};
	}
};
