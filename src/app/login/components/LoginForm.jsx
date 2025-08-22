"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import SocialLogin from "./SocialLogin";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/products",
        redirect: false,
      });

      if (res.ok) {
        router.push("/products");
        form.reset();
      } else {
        alert("Authentication failed");
      }
    } catch (error) {
      console.log(error);
      alert("Authentication failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl p-10 md:w-96 w-full space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Welcome Back
        </h2>
        <p className="text-center text-white mb-6">
          Sign in to continue to your dashboard
        </p>

        <div className="flex flex-col space-y-4">
          <label className="text-white font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6e0d25] transition duration-300"
            required
          />

          <label className="text-white font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6e0d25] transition duration-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 
            hover:from-pink-600 hover:to-red-600 hover:bg-[#7f1a34] text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Log In
        </button>

        <p className="text-center text-white">
          Don't have an account?{" "}
          <Link href="/register" className="text-pink-400 font-semibold underline">
            Sign Up
          </Link>
        </p>

        <p className="text-center text-white mt-4 font-medium">Or Sign In with</p>
        <div className="flex justify-center mt-2">
          <SocialLogin />
        </div>
      </form>
    </div>
  );
}
