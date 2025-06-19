"use client";
import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-yellow-100 to-orange-100">
      <div className="bg-white w-full max-w-4xl flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden">
        {/* Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center p-8 text-white w-full md:w-1/2 bg-gradient-to-br from-amber-400 to-amber-700">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="mb-8 text-center">
            Login to your dashboard and continue your journey with us.
          </p>
          <img
            src="https://illustrations.popsy.co/amber/login.svg"
            alt="Login Illustration"
            className="w-64 h-64"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-amber-600"
              >
                Email Address
              </label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-amber-600"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
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
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2"
            >
              Sign In <FaArrowRight />
            </button>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-400">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button className="border p-2 rounded-lg hover:border-red-500 hover:text-red-500">
                <FaGoogle />
              </button>
              <button className="border p-2 rounded-lg hover:border-blue-600 hover:text-blue-600">
                <FaFacebookF />
              </button>
              <button className="border p-2 rounded-lg hover:border-sky-400 hover:text-sky-400">
                <FaTwitter />
              </button>
            </div>
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
