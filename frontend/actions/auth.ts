"use server";

import { cookies } from "next/headers";
import api from "@/lib/api";
import { redirect } from "next/navigation";

type LoginState = {
  success: boolean;
  error?: string;
  user?: any;
  token?: string; // Tambahkan field token
};

export async function loginActionWithState(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await api.post("/api/auth/login", { email, password });
    const { user, token } = response.data;

    // Simpan token di cookie untuk SSR
    (
      await // Simpan token di cookie untuk SSR
      cookies()
    ).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 minggu
      path: "/",
    });

    return {
      success: true,
      user,
      token,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.response?.data?.error || "Login Gagal",
    };
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
