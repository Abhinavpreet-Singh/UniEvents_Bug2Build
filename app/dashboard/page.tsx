"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Event from "../event/page";
import logoImg from "@/assets/UniEvents Logo Only.png";
import laptopImg from "@/assets/laptop.png";
import musicImg from "@/assets/music.png";
import collegeFestImg from "@/assets/collegefest.png";
import workshopImg from "@/assets/workshop.png";
import artImg from "@/assets/art.png";
import meetupsImg from "@/assets/meetups.png";

interface Category {
  id: string;
  name: string;
  count: number;
  image: StaticImageData;
}

const CATEGORIES: Category[] = [
  { id: "1", name: "Tech & Dev", count: 234, image: laptopImg },
  { id: "2", name: "Music", count: 187, image: musicImg },
  { id: "3", name: "College Fests", count: 40, image: collegeFestImg },
  { id: "4", name: "Workshops", count: 158, image: workshopImg },
  { id: "5", name: "Art & Culture", count: 80, image: artImg },
  { id: "6", name: "Meetups", count: 108, image: meetupsImg },
];

import { Menu, X } from "lucide-react";
import HorizontalSlider from "../Components/HorizontalSlider";
const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#EBF4FF] font-sans selection:bg-blue-200">

      <nav className="flex items-center justify-between px-6 py-1 bg-white md:px-16 sticky top-0 z-50 shadow-sm">

        <div className="flex items-center gap-2">

          <div className="flex items-center gap-1 md:gap-2">
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
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-center items-center gap-8 text-gray-400 font-semibold text-[15px]">
          <a href="#discover" className="hover:text-blue-600 transition-colors">
            Discover
          </a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors">
            How it works
          </a>
          <a href="#events" className="hover:text-blue-600 transition-colors">
            My Tickets
          </a>
        </div>

        {/* HAMBURGER */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white px-6 py-6 space-y-6 shadow-lg">
          <a href="#discover" onClick={() => setOpen(false)} className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors">
            Discover
          </a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors">
            How it works
          </a>
          <a href="#events" onClick={() => setOpen(false)} className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors">
            My Tickets
          </a>
        </div>
      )}

      <main className="flex flex-col items-center justify-center pt-24 md:pt-40 pb-16 px-6 text-center">
        <h1 className="text-[44px] md:text-[84px] font-black text-[#0A0A0A] tracking-tight leading-[1.1]">
          Discover and book
        </h1>
        <h2 className="text-[40px] md:text-[76px] font-black text-[#4A7DFF] tracking-tight mt-[-4px] md:mt-[-8px]">
          events effortlessly.
        </h2>

        <p className="mt-8 text-gray-400 text-base md:text-[17px] max-w-[600px] font-bold leading-relaxed px-4">
          From Front Row Fan To Sold Out Host &mdash; Everything{" "}
          <br className="hidden md:block" />
          You Need To Live And Lead The Experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
          <a href="#events" className="w-full sm:w-auto px-10 py-4 bg-[#234E94] text-white rounded-[14px] font-bold text-base hover:bg-[#1a3a6e] transition-all shadow-sm text-center inline-block">
            Start Searching
          </a>
        </div>
      </main>

      {/* Categories */}
      <section id="discover" className="px-6 md:px-16 pb-24 scroll-mt-24">
        <h2 className="text-[40px] md:text-[56px] font-black text-[#0A0A0A] tracking-tight mb-12 text-center md:text-left">
          What are you into?
        </h2>

        <HorizontalSlider>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all cursor-pointer border border-white hover:border-blue-100 group w-[180px] md:w-[220px]"
            >
              <div className="h-24 w-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={96}
                  height={96}
                  className="max-h-full max-w-full object-contain"
                  sizes="96px"
                />
              </div>
              <h3 className="text-[#0A0A0A] font-black text-lg leading-tight mb-1">
                {cat.name}
              </h3>
              <p className="text-[#A0AEC0] font-bold text-sm">
                {cat.count} events
              </p>
            </div>
          ))}
        </HorizontalSlider>
      </section>

      <Event />

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none -z-10"></div>
    </div>
  );
};

export default DashboardPage;
