import { api } from "@/configs/axios.config";
import { ViewSettings } from "./slices/view/view.interface";

export const ViewSettingsService = {
	async getViewSettings(userId: string): Promise<ViewSettings> {
		const { data: viewSettingsData } = await api.get<ViewSettings>(`/view/${userId}`);
		return viewSettingsData;
	},

	async saveViewSettings(userId: string, saveViewSettingsBody: ViewSettings): Promise<ViewSettings> {
		const { data: viewSettingsData } = await api.post<ViewSettings>(`/view/${userId}`, saveViewSettingsBody);
		return viewSettingsData;
	}
};
