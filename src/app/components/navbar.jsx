"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full font-sans">
      {/* Background Image */}
      <img
        src="/navbg.png"
        alt="Nav Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Navbar Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Top Section */}
        <div className="flex items-center justify-between px-4 lg:justify-around mt-4 mb-1">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[120px] h-auto sm:w-[159px] sm:h-[53px]"
          />

          {/* Center Actions — Desktop Only */}
          <div className="hidden lg:flex items-center gap-4 p-2 relative border-t-4 border-white rounded-md">
            <div
              className="absolute left-0 top-0 w-[4px] bg-white origin-top-left"
              style={{
                height: "calc(100% + 4px)",
                transform: "skewX(-15deg)",
                transformOrigin: "top left",
              }}
            />
            <div
              className="absolute right-0 top-0 w-[4px] bg-white origin-top-right"
              style={{
                height: "calc(100% + 4px)",
                transform: "skewX(15deg)",
                transformOrigin: "top right",
              }}
            />
            <div className="flex items-center gap-3">
              <button className="bg-[#1f2229] hover:bg-[#2b313a] text-white text-[10px] border border-white sm:text-xs font-black py-2.5 px-6 rounded skew-x-[-15deg] shadow-lg transition-colors">
                <span className="block tracking-widest italic">
                  BECOME A CREATOR
                </span>
              </button>
              <button className="bg-[#1f2229] hover:bg-[#2b313a] text-white text-[10px] border border-white sm:text-xs font-black py-2.5 px-6 rounded skew-x-[-15deg] shadow-lg transition-colors">
                <span className="block tracking-widest italic">
                  JOIN AS READER
                </span>
              </button>
              <div className="ml-4 text-xs flex items-center italic">
                <span className="text-[#CB4699] font-medium tracking-wide text-[15px]">
                  Already have an account ?
                </span>
                <a
                  href="#"
                  className="text-[#FFE7FF] font-semibold underline ml-2 tracking-wide text-[15px]"
                >
                  LOGIN
                </a>
              </div>
            </div>
          </div>

          {/* Right: Language + Hamburger */}
          <div className="flex items-center gap-3 text-white">
            <button className="bg-[#1f2229] border border-gray-600 px-3 py-1.5 rounded text-xs font-bold shadow hover:bg-[#2b313a] transition-colors flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 2a15.14 15.14 0 0 1 4 8 15.14 15.14 0 0 1-4 8m0-16A15.14 15.14 0 0 0 6 10a15.14 15.14 0 0 0 4 8m-8-8h16"
                />
              </svg>
              EN
            </button>

            {/* Hamburger — Mobile Only */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#1f2229]/95 border-t border-white/20 px-4 py-4 flex flex-col gap-4">
            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2 text-white font-bold text-sm tracking-widest">
              <a
                href="#"
                className="border border-white rounded-md px-4 py-2 bg-white/10 hover:bg-white hover:text-pink-600 transition-colors"
              >
                HOME
              </a>
              <a
                href="#"
                className="px-4 py-2 hover:text-pink-200 transition-colors"
              >
                CATEGORIES
              </a>
              <a
                href="#"
                className="px-4 py-2 hover:text-pink-200 transition-colors"
              >
                CREATORS
              </a>
              <a
                href="#"
                className="px-4 py-2 hover:text-pink-200 transition-colors"
              >
                SHOP
              </a>
              <a
                href="#"
                className="px-4 py-2 hover:text-pink-200 transition-colors"
              >
                SUBSCRIPTION
              </a>
            </nav>

            {/* Mobile Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-3.5 h-3.5 text-pink-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="w-full pl-9 pr-4 py-2 rounded-full text-xs font-bold tracking-widest text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-pink-300"
                placeholder="SEARCH"
              />
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-2">
              <button className="bg-[#1f2229] hover:bg-[#2b313a] text-white text-xs border border-white font-black py-2.5 px-6 rounded skew-x-[-15deg] shadow-lg transition-colors w-full">
                <span className="block tracking-widest italic">
                  BECOME A CREATOR
                </span>
              </button>
              <button className="bg-[#1f2229] hover:bg-[#2b313a] text-white text-xs border border-white font-black py-2.5 px-6 rounded skew-x-[-15deg] shadow-lg transition-colors w-full">
                <span className="block tracking-widest italic">
                  JOIN AS READER
                </span>
              </button>
              <div className="flex items-center justify-center gap-2 italic pt-1">
                <span className="text-[#CB4699] font-medium tracking-wide text-sm">
                  Already have an account ?
                </span>
                <a
                  href="#"
                  className="text-[#FFE7FF] font-semibold underline tracking-wide text-sm"
                >
                  LOGIN
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Nav Bar */}
        <div
          className="flex items-center justify-evenly bg-[#CB4699] border-t-2 border-b-2 border-white py-1.5"
          style={{
            boxShadow:
              "0 -10px 20px rgba(219, 39, 119, 0.6), 0 10px 20px rgba(219, 39, 119, 0.6)",
          }}
        >
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-white font-bold text-xs sm:text-sm tracking-widest">
            <a
              href="#"
              className="border border-white rounded-md px-4 py-1 hover:bg-white hover:text-pink-600 transition-colors bg-white/10"
            >
              HOME
            </a>
            <a href="#" className="hover:text-pink-200 transition-colors">
              CATEGORIES
            </a>
            <a href="#" className="hover:text-pink-200 transition-colors">
              CREATORS
            </a>
            <a href="#" className="hover:text-pink-200 transition-colors">
              SHOP
            </a>
            <a href="#" className="hover:text-pink-200 transition-colors">
              SUBSCRIPTION
            </a>
          </nav>

          {/* Search — always visible in bottom bar on mobile */}
          <div className="relative w-48 lg:w-72 mx-auto lg:mx-0">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-3.5 h-3.5 text-pink-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="w-full pl-9 pr-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-pink-300 shadow-inner"
              placeholder="SEARCH"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
