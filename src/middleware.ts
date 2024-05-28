import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./actions/auth.actions";

export async function middleware(request: NextRequest) {
  const session = await getSession();

  // If the user is logged in, redirect them to the home page
  if (
    session.isLoggedIn &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If the user is not logged in, allow them to access the login page
  /*   if (!session.isLoggedIn && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  } */
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile",
    "/membership",
    "/login",
    "/register",
  ],
};
