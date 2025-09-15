import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/assets/videos/home-hero.gif";

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
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-8 sm:py-24 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        Your <span className="text-yellow-300">Fractional CFO</span> Partner for
        <span className="animate-pulse"> Maximum Tax Savings</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-sky-100">
        We don&apos;t just file your taxes, we supervise your financial
        department, streamline operations, and unlock tax savings you
        didn&apos;t know were possible.
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
    </div>
  </section>
);
