import { HomeScreenService } from "./HomeScreen.service";

export const HomeScreenController = {
	async getModuleRequests() {
		const [popularRecipes, popularArticles] = await Promise.all([
			HomeScreenService.getPopularRecipes({ _limit: 6 }),
			HomeScreenService.getPopularArticles({ _limit: 4 })
		]);

		return {
			props: { popularRecipes, popularArticles }
		};
	}
};
