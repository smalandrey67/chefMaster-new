import axios from "axios";
import Cookies from "js-cookie";

import { lcs } from "@/utils/localStorage.util";
import { isDevelopment } from "@/constants/mode.constants";

import type { RefreshResponse } from "@/modules/AuthForm";

const API_URL = isDevelopment ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

export const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL
});

export const $apiProtected = axios.create({
	withCredentials: true,
	baseURL: API_URL
});

$apiProtected.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${lcs.getItemWithoutParse<string>("accessToken")}`;
	return config;
});

$apiProtected.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;

		if (error.response.status === 401) {
			try {
				const { data: refreshResultData } = await $api.get<RefreshResponse>("/refresh");

				Cookies.set("user", JSON.stringify(refreshResultData.user));
				lcs.setItem("accessToken", refreshResultData.accessToken);

				return $apiProtected.request(originalRequest);
			} catch (error) {
				Cookies.remove("user");
				lcs.removeItem("accessToken");
			}
		}

		return Promise.reject(error);
	}
);
