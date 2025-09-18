import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/assets/videos/home-hero.gif";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export const HeroSection = () => (
  <section className="relative overflow-hidden text-white">
    {/* Background GIF */}
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={HomeHero}
        alt=""
        className="w-full h-full object-cover"
        aria-hidden="true"
        width={1920}
        height={1080}
        priority
      />
      {/* Optional: Extra blue overlay for stronger effect */}
      <div className="absolute inset-0 bg-sky-800 opacity-75 pointer-events-none" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-6 sm:py-12 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        Your <span className="text-yellow-300">Fractional CFO</span> Partner for
        <div className="inline-block animate-pulse"> Maximum Tax Savings</div>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-sky-100">
        We don&apos;t just file your taxes - we transform struggling operations
        into a profitable, high-value business while unlocking tax savings you
        never knew were possible.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/book-appointment"
          className="px-8 py-3 rounded-md text-base font-semibold bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300"
        >
          Schedule Your Free Consultation
        </Link>
        <Link
          href="/services"
          className="px-8 py-3 rounded-md text-base font-semibold text-sky-700 bg-sky-100 hover:bg-sky-200 dark:bg-sky-950 dark:text-sky-200 dark:hover:bg-sky-800"
        >
          Learn More
        </Link>
      </div>
      <p className="mt-6 max-w-2xl mx-auto text-sm text-sky-200 underline">
        <FaPhone size={16} className="inline-block mr-1" />
        <a href="tel:+14077267901">(407) 726-7901</a>
        <span className="mx-2">|</span>
        <FaEnvelope size={16} className="inline-block mr-1" />
        <a href="mailto:contact@taxadvin.com">contact@taxadvin.com</a>
      </p>
    </div>
  </section>
);
