import { HomeScreenService } from "./HomeScreen.service";

export const HomeScreenController = {
	async getRequestModules() {
		try {
			const [popularRecipes, articles] = await Promise.all([
				HomeScreenService.getPopularRecipes(),
				HomeScreenService.getArticles({ _limit: 4 })
			]);

			return {
				props: { popularRecipes, articles }
			};
		} catch (error) {
			return {
				props: { error: (error as Error).message }
			};
		}
	}
};
