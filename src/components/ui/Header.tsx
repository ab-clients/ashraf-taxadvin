import Image from "next/image";
import logo from "@/assets/images/taxadvin-logo.png";
import { HeaderNav } from "./HeaderNav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-sky-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center h-16">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <Image src={logo} alt="TaxAdvin Logo" width={40} height={40} />
              <span className="text-xl font-bold text-sky-700 dark:text-sky-400">
                TaxAdvin
              </span>
            </div>
          </Link>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};
