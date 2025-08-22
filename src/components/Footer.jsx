"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#49111c] via-[#6e0d25] to-[#9e2a2b] text-white mt-10">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <Link href={"/"} className="outline-0 flex items-center gap-2">
            <Image src="/assets/logo.png" alt="Logo" width={70} height={70} />
            <span className="text-2xl font-bold tracking-wide">SnackRush</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-200">
            Discover mouth-watering meals for every taste.  
Fresh ingredients and bold flavors that make every meal unforgettable.

          </p>
          {/* Social Links */}
          <div className="flex space-x-4 mt-5">
            <Link href="#" className="hover:text-pink-400 transition">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-pink-400 transition">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-pink-400 transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-pink-400 transition">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-pink-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-pink-400 transition duration-300"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:text-pink-400 transition duration-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2 inline-block">
            Contact Us
          </h3>
          <p className="text-sm mb-2">📍 Sylhet, Bangladesh</p>
          <p className="text-sm mb-2">📧 info@casacraft.com</p>
          <p className="text-sm">📞 +880 1607-906754</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} <span className="font-semibold">CasaCraft</span>. All rights reserved.
      </div>
    </footer>
  );
}
