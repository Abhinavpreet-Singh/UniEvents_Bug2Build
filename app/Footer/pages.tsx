"use client";

import { Sparkles, Phone, Mail } from "lucide-react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Attribution removed as requested */}

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center sm:text-left">
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
                <a href="#" className="hover:text-white transition">
                  Event Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Steps Page
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-widest uppercase text-blue-400">
              Resources
            </h3>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
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

          {/* Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-widest uppercase text-blue-400">
              Links
            </h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center hover:scale-110 transition shadow-lg shadow-pink-500/20"
              >
                <FaInstagramSquare className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#0077b5] rounded-2xl flex items-center justify-center hover:scale-110 transition shadow-lg shadow-blue-500/20"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-slate-500 text-xs font-medium">
            © 2026 Bug to Build. 501(c)(3) nonprofit
          </p>

          {/* Extra Links */}
          <div className="flex gap-6 text-xs text-slate-500 font-medium">
            <a href="#" className="hover:text-white">
              Credits
            </a>
            <span className="text-slate-800">•</span>
            <a href="#" className="hover:text-white">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
