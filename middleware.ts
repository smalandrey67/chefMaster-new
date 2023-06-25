import { NextResponse, type NextRequest } from "next/server";
import { isDevelopment } from "@/constants/mode.constants";

const redirectPath = isDevelopment ? "http://localhost:3000/login" : "https://chef-master.vercel.app/login";

export default async function middleware(request: NextRequest) {
	const user = request.cookies.get("user")?.value;
	const pathName = request.nextUrl.pathname;

	if (pathName.startsWith("/settings") && !user) {
		return NextResponse.redirect(redirectPath);
	}

	if (pathName.startsWith("/meal-plan") && !user) {
		return NextResponse.redirect(redirectPath);
	}
}

export const config = {
	matcher: ["/settings", "/meal-plan"]
};
