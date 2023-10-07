import { isDevelopment } from "@/constants/mode.constants";
import { NextResponse, type NextRequest } from "next/server";

const redirectPath = isDevelopment
	? `${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/login`
	: `${process.env.NEXT_PUBLIC_URL_PRODUCTION}/login`;

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
