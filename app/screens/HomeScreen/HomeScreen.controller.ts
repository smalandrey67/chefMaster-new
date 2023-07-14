import { HomeScreenService } from "./HomeScreen.service";

export const HomeScreenController = {
	async getModuleRequests() {
		const [popularRecipes, articles] = await Promise.all([
			HomeScreenService.getPopularRecipes({ _limit: 6 }),
			HomeScreenService.getArticles({ _limit: 4 })
		]);

		return {
			props: { popularRecipes, articles }
		};
	}
};
