import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/dashboard"];
  const authRoutes = ["/login", "/register"];

  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Hanya jalankan middleware untuk route-page biasa (bukan static, api, atau image)
    "/((?!api|_next|favicon.ico|.*\\..*).*)",
  ],
};
