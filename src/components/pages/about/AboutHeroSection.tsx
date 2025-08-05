import Link from "next/link";

/**
 * Hero section for the About page.
 *
 * This component introduces visitors to TaxAdvin’s About page with a bold
 * heading, a concise tagline and a call‑to‑action button.  It uses a simple
 * gradient background to stay consistent with the brand colours used on the
 * home page.
 */
export const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 opacity-90" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          About TaxAdvin
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-sky-100">
          Empowering Florida’s individuals, small businesses and nonprofits with
          personalized, proactive tax and accounting solutions.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block px-8 py-3 rounded-md text-base font-semibold bg-white text-sky-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-sky-300"
        >
          Schedule Your Free Consultation
        </Link>
      </div>
    </section>
  );
};
