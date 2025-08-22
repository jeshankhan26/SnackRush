"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function RegisterForm() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    await registerUser({ name, email, password });
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10"
      >
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
          Create Account
        </h2>
        <p className="text-center text-gray-200 mb-6">
          Sign up to join the modern furniture community
        </p>

        <fieldset className="space-y-6 relative z-10">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              placeholder=" "
              className="peer w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-transparent 
              focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            />
            <label className="absolute left-4 top-3 text-gray-300 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:text-sm transition-all">
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder=" "
              className="peer w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-transparent 
              focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            />
            <label className="absolute left-4 top-3 text-gray-300 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:text-sm transition-all">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              placeholder=" "
              className="peer w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-transparent 
              focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            />
            <label className="absolute left-4 top-3 text-gray-300 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:text-sm transition-all">
              Password
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 
            hover:from-pink-600 hover:to-red-600 font-semibold text-white text-lg shadow-lg hover:shadow-pink-400/50 
            transition-all duration-300"
          >
            Sign Up
          </button>
        </fieldset>

        {/* Extra Links */}
        <p className="text-gray-300 text-center mt-5 text-sm">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="text-pink-400 hover:text-pink-300 underline font-semibold transition"
          >
            Log In
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/30"></div>
          <span className="px-3 text-gray-300 text-sm">Or Sign Up with</span>
          <div className="flex-grow h-px bg-white/30"></div>
        </div>

        {/* Social Login */}
        <SocialLogin />
      </form>
    </div>
  );
}
