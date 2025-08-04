"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "../theme/ThemeToggle";

export const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
        {/* 🌙 Theme Toggle */}
        <li>
          <ThemeToggle />
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsMenuOpen((o) => !o)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 shadow-md rounded-md md:hidden">
          <ul className="flex flex-col p-2 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* 🌙 Theme Toggle for Mobile Menu */}
            <li>
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
