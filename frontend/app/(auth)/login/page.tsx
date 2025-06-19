"use client";

import { useFormStatus } from "react-dom";
import { useRef, useEffect, useState } from "react";
import { loginAction } from "@/actions/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await loginAction(formData);

    if (result.success) {
      redirect("/dashboard");
    } else {
      setError(result.error || "Login failed");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-yellow-100 to-orange-100">
      <div className="bg-white w-full max-w-4xl flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden">
        {/* Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center p-8 text-white w-full md:w-1/2 bg-gradient-to-br from-amber-400 to-amber-700">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="mb-8 text-center">
            Login to your dashboard and continue your journey with us.
          </p>
          <Image
            src="/toko.png"
            alt="Login Illustration"
            width={256}
            height={256}
            className="mx-auto rounded-full"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>

          <form ref={formRef} action={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Email Address"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                required
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-amber-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <SubmitButton />

            {error && (
              <p className="text-sm text-red-600 text-center font-medium">
                {error}
              </p>
            )}

            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <a href="/auth/register" className="text-amber-600 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// Komponen tombol submit terpisah dengan useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 disabled:opacity-60"
      disabled={pending}
    >
      {pending ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      ) : (
        "Sign In"
      )}
    </button>
  );
}
