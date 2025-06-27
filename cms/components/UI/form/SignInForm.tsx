"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Progress } from "@nextui-org/progress";
import { adminLoginActionWithState } from "@/lib/auth";

type LoginState = {
  success: boolean;
  error?: string;
  user?: any;
  token?: string;
};

function SignInForm() {
  const router = useRouter();
  const [showProgress, setShowProgress] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const [state, formAction] = useActionState(adminLoginActionWithState, {
    success: false,
    error: "",
  } as LoginState);

  useEffect(() => {
    if (state?.success) {
      setIsRedirecting(true);
      setShowProgress(true);

      if (state.token) {
        localStorage.setItem("token", state.token);
      }

      Swal.fire({
        title: "Login Berhasil!",
        text: "Anda akan diarahkan ke dashboard admin",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });

      setTimeout(() => {
        router.replace("/dashboard");
      }, 1500);
    } else if (state?.error) {
      Swal.fire({
        title: "Login Gagal!",
        text: state.error,
        icon: "error",
        confirmButtonColor: "#f97316",
        confirmButtonText: "Coba Lagi",
      });
    }
  }, [state, router]);

  return (
    <section className=" bg-gray-900 min-h-screen flex items-center text-white justify-center">
      {/* Progress Bar */}
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

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full max-w-md">
        <div className="w-full bg-gray-700 rounded-lg shadow dark:border relative">
          {/* Overlay loading */}
          {isRedirecting && (
            <div className="absolute inset-0 bg-white bg-opacity-70 z-40 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-3"></div>
                <p className="text-gray-700 font-medium">
                  Mengarahkan ke Dashboard...
                </p>
              </div>
            </div>
          )}

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex gap-3 items-center justify-center mb-6 text-2xl font-semibold text-white dark:text-white">
              <FontAwesomeIcon icon={faGem} className="w-6 text-amber-500" />
              PERMATA ROTI - ADMIN
            </div>

            <form action={formAction} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Admin Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
                  placeholder="admin@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
                  required
                />
              </div>

              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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
          Memproses...
        </span>
      ) : (
        "Masuk sebagai Admin"
      )}
    </button>
  );
}

export default SignInForm;
