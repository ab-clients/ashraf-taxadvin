import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "@/assets/images/taxadvin-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-sky-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-300 dark:border-gray-700 pb-8">
          {/* 1️⃣ Logo & Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 md:w-16 lg:w-20">
              <Image src={logo} alt="TaxAdvin Logo" className="w-full h-auto" />
            </div>
            <span className="text-2xl md:text-3xl font-bold text-sky-700 dark:text-sky-400">
              TaxAdvin
            </span>
          </div>

          {/* 2️⃣ Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-sky-900 dark:text-sky-300 mb-3 italic ">
              Contact Us
            </h3>
            <p className="mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-sky-600 dark:text-sky-400" />
              (407) 726-7901
            </p>
            <p className="mb-2 flex items-center gap-2">
              <FaEnvelope className="text-sky-600 dark:text-sky-400" />
              <a href="mailto:contact@taxadvin.com" className="hover:underline">
                contact@taxadvin.com
              </a>
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-sky-600 dark:text-sky-400 mt-1" />
              <span>
                13732 Eden Isle Blvd
                <br />
                Windermere, FL - 34786
              </span>
            </p>
          </div>

          {/* 3️⃣ Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-sky-900 dark:text-sky-300 mb-3 italic ">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/book-appointment"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Centered Text */}
        <div className="text-center text-sm pt-6">
          <p>
            © 2025 TaxAdvin Financial Services.
            <br />
            Developed by{" "}
            <a
              href="https://alybadawy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 hover:underline"
            >
              Aly Badawy
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
