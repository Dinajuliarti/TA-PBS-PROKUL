import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const path = request.nextUrl.pathname;

  // Route yang diproteksi
  const protectedRoutes = ["/users/dashboard"];
  const authRoutes = ["/login", "/register"];

  // Redirect jika sudah login tapi mengakses auth routes
  if (token && authRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/users/dashboard", request.url));
  }

  // Redirect jika belum login tapi mengakses protected routes
  if (!token && protectedRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/users/:path*"],
};
