import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Fungsi untuk memverifikasi token
function verifyToken(token: string | undefined): boolean {
  if (!token) return false;

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return true;
  } catch (err) {
    return false;
  }
}

// Middleware utama
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // CORS preflight
  if (request.method === "OPTIONS") {
    return handleCors(request);
  }

  // Proteksi hanya untuk route tertentu
  const protectedRoutes = ["/api/users", "/api/chart", "/api/katalog"];
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected) {
    const authHeader = request.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!verifyToken(token)) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Unauthorized: Token tidak valid atau tidak ada.",
            status: 401,
          },
        },
        { status: 401 }
      );
    }
  }

  const response = NextResponse.next();
  setCorsHeaders(response);
  return response;
}

// Fungsi bantu untuk preflight request
function handleCors(request: NextRequest) {
  const origin = request.headers.get("origin") || "*";
  const response = new NextResponse(null, { status: 204 });

  setCorsHeaders(response, origin);
  return response;
}

// Set header CORS
function setCorsHeaders(response: NextResponse, origin?: string) {
  response.headers.set(
    "Access-Control-Allow-Origin",
    origin ||
      process.env.ALLOWED_ORIGIN ||
      "http://localhost:3000 || https://permata-roti.vercel.app"
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-CSRF-Token"
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Expose-Headers", "Set-Cookie");
}

// Konfigurasi jalur middleware
export const config = {
  matcher: "/api/:path*",
};
