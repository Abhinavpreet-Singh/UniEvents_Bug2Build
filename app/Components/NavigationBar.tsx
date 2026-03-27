"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/UniEvents Logo Only.png";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-1 bg-white md:px-16 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-1 md:gap-2">
          <div className="relative h-16 w-16 md:h-20 md:w-20">
            <Image
              src={logoImg}
              alt="UniEvents logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-[#1425D8] text-2xl md:text-[2.3rem] font-black tracking-tighter">
            UniEvents
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-8 text-gray-400 font-semibold text-[15px]">
        <Link href="/dashboard" className="hover:text-blue-600">
          Discover
        </Link>
        <Link href="/howitwork" className="hover:text-blue-600">
          How it works
        </Link>
        <Link href="/event" className="hover:text-blue-600">
          My Tickets
        </Link>
        <Link href="/host" className="hover:text-blue-600">
          My Bookings
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 text-gray-500 border border-gray-300 rounded-full font-bold text-sm hover:bg-blue-500 hover:text-white transition-all">
            Login
          </button>
          <button className="px-6 py-2 bg-[#4A7DFF] text-white rounded-full font-bold text-sm shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 py-6 space-y-6 shadow-lg">
          <Link href="/dashboard" className="block text-gray-700 font-semibold">
            Discover
          </Link>
          <Link href="/howitwork" className="block text-gray-700 font-semibold">
            How it works
          </Link>
          <Link href="/event" className="block text-gray-700 font-semibold">
            My Tickets
          </Link>
          <Link href="/host" className="block text-gray-700 font-semibold">
            My Bookings
          </Link>
          <div className="flex flex-col gap-3 pt-4 border-t">
            <button
              className="w-full py-2 border rounded-full font-bold text-gray-600 hover:bg-blue-500 hover:text-white"
              type="button"
            >
              Login
            </button>
            <button
              className="w-full py-2 bg-[#4A7DFF] text-white rounded-full font-bold"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
