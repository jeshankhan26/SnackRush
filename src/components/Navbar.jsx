"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { data: session, status } = useSession();

  const navMenu = (
    <>
      <li>
        <Link
          href={"/"}
          className="transition-colors duration-300 hover:text-pink-400"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/products"}
          className="transition-colors duration-300 hover:text-pink-400"
        >
          Products
        </Link>
      </li>
      {status === "authenticated" && (
        <li>
          <Link
            href={"/dashboard/add-product"}
            className="transition-colors duration-300 hover:text-pink-400"
          >
            Add Product
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar sm:px-10 px-4 bg-gradient-to-r from-[#49111c] via-[#6e0d25] to-[#9e2a2b] text-white shadow-xl">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-[#49111c] font-semibold rounded-xl z-10 mt-3 w-52 p-3 shadow-lg"
          >
            {navMenu}
          </ul>
        </div>

        {/* Logo */}
        <Link href={"/"} className="outline-0 flex items-center gap-2">
          <Image src="/assets/logo.png" alt="Logo" width={60} height={60} />
          <span className="text-2xl font-extrabold tracking-wide">
            SnackRush
          </span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-lg font-medium">
          {navMenu}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-4">
        {status === "authenticated" ? (
          <button
            className="px-5 py-2 rounded-xl font-semibold border border-white/40 
            bg-white/10 backdrop-blur-md text-white hover:bg-pink-500 hover:shadow-lg 
            transition-all duration-300"
            onClick={() => signOut()}
          >
            Logout
          </button>
        ) : (
          <Link href={"/login"}>
            <button
              className="px-5 py-2 rounded-xl font-semibold border border-white/40 
              bg-white/10 backdrop-blur-md text-white hover:bg-pink-500 hover:shadow-lg 
              transition-all duration-300"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
