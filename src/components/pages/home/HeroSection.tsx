import Link from "next/link";

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-28 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        Your Trusted Partner for Simple &amp; Stress‑Free Financial Solutions
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100">
        Comprehensive tax and accounting services for individuals, small
        businesses, and nonprofits across Florida – available locally or online.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="px-8 py-3 rounded-md text-base font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Schedule Your Free Consultation
        </Link>
        <Link
          href="/services"
          className="px-8 py-3 rounded-md text-base font-semibold text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:hover:bg-blue-800"
        >
          Learn More
        </Link>
      </div>
    </div>
  </section>
);
