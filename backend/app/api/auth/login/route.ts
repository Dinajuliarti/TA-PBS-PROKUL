import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth";
import { generateToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, name: true, password: true },
    });

    if (!user) return invalidCredentials();

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) return invalidCredentials();

    const isAdmin =
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD;

    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: isAdmin ? "admin" : "user",
    });

    const response = NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name },
      token,
      role: isAdmin ? "admin" : "user",
    });

    response.headers.set(
      "Access-Control-Allow-Origin",
      process.env.ALLOWED_ORIGIN || "*"
    );
    response.headers.set("Access-Control-Allow-Credentials", "true");

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return serverError();
  }
}

// Helper functions
const invalidCredentials = () =>
  NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

const serverError = () =>
  NextResponse.json({ error: "Server error" }, { status: 500 });
