import { $apiProtected } from "@/configs/axios.config";
import type { ViewSettings } from "./slices/view/view.interface";

export const ViewSettingsService = {
	async getViewSettings(userId: string): Promise<ViewSettings> {
		const { data: viewSettingsData } = await $apiProtected.get<ViewSettings>(`/view/${userId}`);
		return viewSettingsData;
	},

	async saveViewSettings(userId: string, saveViewSettingsBody: ViewSettings): Promise<ViewSettings> {
		const { data: updatedViewSettingsData } = await $apiProtected.post<ViewSettings>(`/view/${userId}`, saveViewSettingsBody);
		return updatedViewSettingsData;
	}
};
