"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalSliderProps {
  children: React.ReactNode;
  title?: string;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ children, title }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group w-full">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={() => scroll("left")}
          disabled={!showLeftArrow}
          className={`p-3 rounded-full bg-white shadow-xl border border-gray-100 text-blue-600 transition-all pointer-events-auto ${
            !showLeftArrow ? "invisible" : "hover:scale-110 active:scale-95"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>
      </div>

      <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={() => scroll("right")}
          disabled={!showRightArrow}
          className={`p-3 rounded-full bg-white shadow-xl border border-gray-100 text-blue-600 transition-all pointer-events-auto ${
            !showRightArrow ? "invisible" : "hover:scale-110 active:scale-95"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} strokeWidth={3} />
        </button>
      </div>

      {/* Slider Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {React.Children.map(children, (child) => (
          <div className="flex-none snap-start">
            {child}
          </div>
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HorizontalSlider;
