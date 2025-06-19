"use server";

import { cookies } from "next/headers";
import api from "@/lib/api";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await api.post("/api/auth/login", { email, password });

    // Simpan token di localStorage (client-side)
    if (typeof window !== "undefined") {
      localStorage.setItem("token", response.data.token);
    }

    // Set cookie untuk server-side access
    (
      await // Set cookie untuk server-side access
      cookies()
    ).set("token", response.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 jam
      path: "/",
    });

    return { success: true, user: response.data.user };
  } catch (error) {
    return { success: false, error: "Login failed" };
  }
}

export async function registerAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await api.post("/api/auth/register", {
      name,
      email,
      password,
    });

    return { success: true, user: response.data.user };
  } catch (error) {
    return {
      success: false,
      message: error || "Registration failed",
    };
  }
}

export async function logoutAction() {
  // Hapus dari localStorage
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }

  // Hapus cookie
  (
    await // Hapus cookie
    cookies()
  ).delete("token");

  redirect("/login");
}
