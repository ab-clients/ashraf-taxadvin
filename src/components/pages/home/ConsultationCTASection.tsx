export const ConsultationCTASection = () => (
  <section
    className="relative overflow-hidden bg-sky-500 text-white dark:bg-gray-800 dark:text-gray-300 py-16 px-6 lg:px-8"
    aria-label="Schedule a Free Consultation"
  >
    {/* Background overlay (could be replaced with an <img> or <video>) */}
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-sky-800 opacity-80"
    />

    <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Need Tax or Accounting Help?
      </h2>
      <p className="mt-4 text-lg sm:text-xl">
        Get a{" "}
        <span className="text-2xl font-bold italic">
          free 30‑minute consultation
        </span>{" "}
        with one of our licensed CPAs. <br /> We serve individuals, small
        businesses, and nonprofits — locally in Florida, or online.
      </p>
      <a
        href="/schedule"
        className="mt-8 inline-block bg-sky-50 text-sky-900 font-semibold text-lg px-8 py-4 rounded-md hover:bg-sky-100 focus:ring-4 focus:ring-sky-300 transition"
      >
        Schedule Your Free Consultation
      </a>

      {/* Optional trust icons or secure assurances */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
        <div className="bg-blue-800/60 dark:bg-blue-900/80 text-sky-100 rounded-lg px-4 py-2 flex items-center shadow-sm min-w-[180px] justify-center shadow-gray-500 dark:shadow-gray-800 shadow-sm">
          ✔ Licensed CPA
        </div>
        <div className="bg-blue-800/60 dark:bg-blue-900/80 text-sky-100 rounded-lg px-4 py-2 flex items-center shadow-sm min-w-[180px] justify-center shadow-gray=500 dark:shadow-gray-800 shadow-sm">
          ✔ Virtual &amp; In‑Office Visits
        </div>
        <div className="bg-blue-800/60 dark:bg-blue-900/80 text-sky-100 rounded-lg px-4 py-2 flex items-center shadow-sm min-w-[180px] justify-center shadow-gray=500 dark:shadow-gray-800 shadow-sm">
          ✔ Zero‑Obligation Booking
        </div>
        <div className="bg-blue-800/60 dark:bg-blue-900/80 text-sky-100 rounded-lg px-4 py-2 flex items-center shadow-sm min-w-[180px] justify-center shadow-gray=500 dark:shadow-gray-800 shadow-sm">
          ✔ We speak Arabic • نتحدث العربية
        </div>
      </div>
    </div>
  </section>
);
