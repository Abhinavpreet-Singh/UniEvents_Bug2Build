"use client";


import { Sparkles, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Attribution removed as requested */}

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center sm:text-left">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-widest uppercase text-blue-400 flex items-center justify-center sm:justify-start">
              <Sparkles className="w-4 h-4 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home Page
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition">
                  Event Page
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition">
                  Steps Page
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-widest uppercase text-blue-400">
              Contact
            </h3>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>9245643523</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>bugxyz.dev@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
    
    </footer>
  );
};

export default Footer;
