"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { loginActionWithState } from "@/actions/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import { Progress } from "@nextui-org/progress";

export default function LoginPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [showProgress, setShowProgress] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const [state, formAction] = useFormState(loginActionWithState, {
    success: false,
    error: "",
  });

  useEffect(() => {
    if (state.success) {
      setIsRedirecting(true);
      setShowProgress(true);

      // Tampilkan SweetAlert sukses
      Swal.fire({
        title: "Login Berhasil!",
        text: "Anda akan diarahkan ke dashboard",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: "#fff",
        color: "#1f2937",
      });

      // Redirect setelah 1.5 detik
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } else if (state.error) {
      // Tampilkan SweetAlert error
      Swal.fire({
        title: "Login Gagal!",
        text: state.error,
        icon: "error",
        confirmButtonColor: "#f97316",
        confirmButtonText: "Coba Lagi",
        background: "#fff",
        color: "#1f2937",
      });
    }
  }, [state, router]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-yellow-100 to-orange-100">
      {/* Progress Bar di atas semua konten */}
      {showProgress && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="w-full"
            color="warning"
          />
        </div>
      )}

      <div className="bg-white w-full max-w-4xl flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden relative">
        {/* Overlay loading saat redirect */}
        {isRedirecting && (
          <div className="absolute inset-0 bg-white bg-opacity-70 z-40 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-3"></div>
              <p className="text-gray-700 font-medium">
                Mengarahkan ke Dashboard...
              </p>
            </div>
          </div>
        )}

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
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-300 focus:border-amber-300"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-300 focus:border-amber-300"
                placeholder="••••••••"
              />
            </div>



            <SubmitButton />


            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-amber-600 hover:text-amber-500 hover:underline"
              >
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
      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 shadow-md"
    >
      {pending ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Signing In...
        </span>
      ) : (
        "Sign In"
      )}
    </button>
  );
}
