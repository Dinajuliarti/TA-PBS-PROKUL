import { cookies } from "next/headers";
import { generateToken, verifyToken } from "./jwt";

export const createSession = async (userId: string, email: string) => {
  const token = generateToken({ userId, email });
  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, // 1 jam
    path: "/",
    sameSite: "strict",
  });
  console.log("Token disetel:", token); // Debug
};

export const deleteSession = async () => {
  (await cookies()).delete("token");
};

export const getSessionUser = async () => {
  const token = (await cookies()).get("token")?.value;
  if (!token) return null;
  return verifyToken(token);
};
