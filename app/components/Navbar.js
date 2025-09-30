"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { display, setDisplay } = useTheme(); // true = light, false = dark
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Theme background handling
  useEffect(() => {
    document.body.style.backgroundColor = display ? "white" : "#111827";
  }, [display]);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close menu on link click
  };

  const menuItems = ["about", "services", "portfolio", "contact"];

  return (
    <div
      className={`flex ${
        display ? "text-gray-900 bg-white" : "text-gray-100 bg-gray-900"
      } w-screen h-[75px] justify-center items-center`}
    >
      <nav className="w-full h-full flex justify-around items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full gradient-logo flex items-center justify-center">
            <span className="text-white text-2xl font-bold">SV</span>
          </div>
          <span className="font-bold text-[18px] ml-2.5">Sanket Visuals</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5">
          {menuItems.map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>

        {/* Theme & Mobile Menu Buttons */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          {display ? (
            <Image
              onClick={() => setDisplay(false)}
              className="cursor-pointer"
              width={25}
              height={25}
              priority
              src="/sun.svg"
              alt="Sun"
            />
          ) : (
            <Image
              onClick={() => setDisplay(true)}
              className="cursor-pointer"
              width={25}
              height={25}
              priority
              src="/moon.svg"
              alt="Moon"
            />
          )}

          {/* Mobile menu toggle (hidden on md+) */}
          <Image
            onClick={() => setOpen(!open)}
            className="ml-2.5 cursor-pointer md:hidden flex"
            width={25}
            height={25}
            priority
            src={display ? "/bmenu.svg" : "/wmenu.svg"}
            alt="Menu"
          />
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            ref={menuRef}
            className={`absolute right-5 top-[75px] flex flex-col rounded-md shadow-md z-50 ${
              display ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"
            }`}
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((section) => (
                <li
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
