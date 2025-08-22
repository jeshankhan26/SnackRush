import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SnackRush",
  description: "Your one-stop shop for all furniture needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-[#49111c] via-[#6e0d25] to-[#9e2a2b]`}
      >
        <NextAuthProvider>
          <Navbar/>
          {children}
          <Footer/>
        </NextAuthProvider>
      </body>
    </html>
  );
}
