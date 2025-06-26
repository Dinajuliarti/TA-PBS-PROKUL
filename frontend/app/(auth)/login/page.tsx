"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { loginActionWithState } from "@/actions/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const [state, formAction] = useFormState(loginActionWithState, {
    success: false,
    error: "",
  });

  useEffect(() => {
    if (state.success) {
      router.push("/dashboard");
    }
  }, [state.success, router]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-yellow-100 to-orange-100">
      <div className="bg-white w-full max-w-4xl flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden">
        {/* Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center p-8 text-white w-full md:w-1/2 bg-gradient-to-br from-amber-400 to-amber-700">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="mb-8 text-center">Login to your dashboard.</p>
          <Image
            src="/toko.png"
            alt="Login"
            width={256}
            height={256}
            className="mx-auto rounded-full"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>

          <form ref={formRef} action={formAction} className="space-y-6">
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-300"
              placeholder="Email Address"
            />
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-300"
              placeholder="Password"
            />

            <SubmitButton />

            {state?.error && (
              <p className="text-sm text-red-600 text-center font-medium">
                {state.error}
              </p>
            )}

            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link href="/register" className="text-amber-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold"
    >
      {pending ? "Signing In..." : "Sign In"}
    </button>
  );
}
