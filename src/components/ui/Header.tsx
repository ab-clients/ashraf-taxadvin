import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/images/taxadvin-logo.png";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="TaxAdvin Logo" width={40} height={40} />
            <span className="text-xl font-bold text-blue-700 dark:text-blue-400">
              TaxAdvin
            </span>
          </div>

          <HeaderNav />
        </div>
      </div>
    </header>
  );
};
