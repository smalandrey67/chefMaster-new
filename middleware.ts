import { NextResponse, type NextRequest } from "next/server";

const redirectPath =
	process.env.NODE_ENV === "development" ? "http://localhost:3000/login" : "https://chef-master.vercel.app/login";

export default async function middleware(request: NextRequest) {
	const isLoggedIn = request.cookies.get("isLoggedIn")?.value;

	if (request.nextUrl.pathname.startsWith("/settings") && !isLoggedIn) {
		return NextResponse.redirect(redirectPath);
	}

	if (request.nextUrl.pathname.startsWith("/meal-plan") && !isLoggedIn) {
		return NextResponse.redirect(redirectPath);
	}
}

export const config = {
	matcher: ["/settings", "/meal-plan"]
};
