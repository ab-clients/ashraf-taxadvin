"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "../theme/ThemeToggle";

export const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Book Appointment", href: "/book-appointment" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return (
      pathname.startsWith(href) ||
      (pathname.startsWith("/tax-center") && href === "/services")
    );
  };

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-2">
        {navItems.map((item) => (
          <li key={item.href} className="relative">
            <Link
              href={item.href}
              className={`
                relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ease-out
                ${
                  isActive(item.href)
                    ? `
                    text-white dark:text-white
                    bg-gradient-to-r from-sky-400/90 to-blue-500/90
                    backdrop-blur-md
                    shadow-lg shadow-sky-400/30 dark:shadow-sky-400/20
                    border border-white/20 dark:border-white/10
                    before:absolute before:inset-0 before:rounded-xl
                    before:bg-gradient-to-r before:from-white/20 before:to-transparent
                    before:opacity-0 before:transition-opacity before:duration-300
                    hover:before:opacity-100
                    hover:shadow-xl hover:shadow-sky-400/40
                    hover:scale-105
                    transform
                  `
                    : `
                    text-gray-700 dark:text-gray-200
                    hover:text-sky-600 dark:hover:text-sky-400
                    hover:bg-sky-50/50 dark:hover:bg-sky-950/30
                    hover:backdrop-blur-sm
                    hover:scale-105
                    transform
                  `
                }
              `}
            >
              <span className="relative z-10">{item.label}</span>
              {isActive(item.href) && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/10 to-blue-500/10 animate-pulse" />
              )}
            </Link>
          </li>
        ))}
        {/* 🌙 Theme Toggle */}
        <li className="ml-2">
          <ThemeToggle />
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className={`
          md:hidden p-2 rounded-lg transition-all duration-300 ease-out transform focus:outline-none
          text-gray-700 dark:text-gray-200 
          hover:text-sky-600 dark:hover:text-sky-400
          hover:bg-sky-50/50 dark:hover:bg-sky-950/30
          hover:backdrop-blur-sm hover:scale-105
        `}
        onClick={() => setIsMenuOpen((o) => !o)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-xl rounded-xl border border-white/20 dark:border-gray-700/30 md:hidden z-50">
          <ul className="flex flex-col p-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    relative block px-4 py-3 rounded-xl font-medium transition-all duration-300 ease-out
                    ${
                      isActive(item.href)
                        ? `
                        text-white dark:text-white
                        bg-gradient-to-r from-sky-400/90 to-blue-500/90
                        backdrop-blur-md
                        shadow-lg shadow-sky-400/30 dark:shadow-sky-400/20
                        border border-white/20 dark:border-white/10
                        before:absolute before:inset-0 before:rounded-xl
                        before:bg-gradient-to-r before:from-white/20 before:to-transparent
                        before:opacity-0 before:transition-opacity before:duration-300
                        hover:before:opacity-100
                        hover:shadow-xl hover:shadow-sky-400/40
                        transform
                      `
                        : `
                        text-gray-700 dark:text-gray-200
                        hover:text-sky-600 dark:hover:text-sky-400
                        hover:bg-sky-50/50 dark:hover:bg-sky-950/30
                        hover:backdrop-blur-sm
                        transform
                      `
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive(item.href) && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/10 to-blue-500/10 animate-pulse" />
                  )}
                </Link>
              </li>
            ))}
            {/* 🌙 Theme Toggle for Mobile Menu */}
            <li className="pt-2 border-t border-gray-200/50 dark:border-gray-700/50 mt-3">
              <div className="px-4 py-2">
                <ThemeToggle />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
