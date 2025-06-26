import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return handleCors(request);
  }

  const response = NextResponse.next();
  setCorsHeaders(response);
  return response;
}

function handleCors(request: NextRequest) {
  const origin = request.headers.get("origin") || "*";
  const response = new NextResponse(null, { status: 204 });

  setCorsHeaders(response, origin);
  return response;
}

function setCorsHeaders(response: NextResponse, origin?: string) {
  response.headers.set(
    "Access-Control-Allow-Origin",
    origin || "https://permata-roti.vercel.app" || "http://localhost:3000" || "https://permata-roti.vercel.app/"
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

export const config = {
  matcher: "/api/:path*",
};
