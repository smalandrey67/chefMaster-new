import axios from "axios";

const API_URL =
	process.env.NODE_ENV === "development"
		? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
		: process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

export const api = axios.create({
	withCredentials: true,
	baseURL: API_URL
});
