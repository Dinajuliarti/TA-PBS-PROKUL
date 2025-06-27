import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  const path = request.nextUrl.pathname;

  console.log("🚀 Middleware Debug");
  console.log("Token:", token);
  console.log("Path:", path);

  // Route yang diproteksi
  const protectedRoutes = ["/dashboard"];
  const authRoutes = ["/login"];

  // Debug: Cek apakah path terdeteksi sebagai authRoutes
  const isAuthRoute = authRoutes.some((route) => path.startsWith(route));
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );

  console.log("Is Auth Route:", isAuthRoute);
  console.log("Is Protected Route:", isProtectedRoute);

  // Jika sudah login, jangan boleh akses halaman login lagi
  if (token && isAuthRoute) {
    console.log("Redirecting to /dashboard because user is already logged in.");
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Jika belum login, tidak boleh akses halaman protected
  if (!token && isProtectedRoute) {
    console.log("Redirecting to /login because user is not logged in.");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  console.log("Access granted.");
  return NextResponse.next();
}

// Middleware hanya aktif untuk halaman dashboard dan login
export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
