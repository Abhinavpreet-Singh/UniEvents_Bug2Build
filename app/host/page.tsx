import React from "react";

import Footer from "../Footer/pages";
/**
 * HostEvents Component
 * Responsive landing section
 */
const HostEvents: React.FC = () => {
  return (
    <>
    <div className="min-h-screen bg-[#f1f6ff] flex flex-col font-sans text-[#1c3a6b]">
      {/* Centered Top Header */}
      <header className="w-full py-12 flex justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-[0.2em] uppercase text-[#2a5298]">
          Host Events
        </h2>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT */}
          <div className="w-full md:w-1/2 space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[900] uppercase leading-[1.1] tracking-tight">
              <span className="text-[#1D458D]">Create </span>
              <span className="text-[#1E1B4B]">and <br /> Manage Events</span> <br />
              <span className="text-[#1D458D]">Effortlessly</span>
            </h1>

            <a href="#events" className="bg-[#1D458D] hover:bg-[#162040] text-white text-lg font-bold px-10 py-4 rounded-xl shadow-lg transition-transform active:scale-95 duration-200 inline-block text-center">
              Start Searching
            </a>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow */}
              <div className="absolute inset-0 bg-blue-200/30 blur-3xl rounded-[3rem] -z-10" />

              {/* Card */}
              <div className="w-full h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl  flex items-center justify-center">
                {/* Placeholder */}
                <div className="text-gray-200 flex flex-col items-center">
                  <img className="rounded-3xl" src="https://hackathon-platform-2cxc.vercel.app/assets/hackathon_illustration.png" alt="" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom spacing */}
    </div>
       <Footer />
    </>
  );
};

export default HostEvents;
