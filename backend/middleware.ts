import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = [
  "http://localhost:3000",
  "https://permata-roti.vercel.app",
];

export async function middleware(request: NextRequest) {
  const origin = request.headers.get("origin") || "";
  const response = NextResponse.next();

  // Kalau preflight request
  if (request.method === "OPTIONS") {
    return handlePreflight(origin);
  }

  // Tambahkan CORS headers untuk semua request
  setCorsHeaders(response, origin);
  return response;
}

function handlePreflight(origin: string) {
  const response = new NextResponse(null, { status: 204 });
  setCorsHeaders(response, origin);
  return response;
}

function setCorsHeaders(response: NextResponse, origin: string) {
  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  } else {
    // Optional: Bisa diset ke "*" untuk development, atau tolak
    response.headers.set(
      "Access-Control-Allow-Origin",
      "https://permata-roti.vercel.app"
    );
  }

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

export const config = {
  matcher: "/api/:path*",
};
