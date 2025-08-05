/**
 * MissionStatementSection articulates TaxAdvin's purpose and guiding
 * principles.  It consolidates the mission text previously used with
 * card‑based values into a single narrative section.  This design avoids
 * cards and emphasises clarity and simplicity, matching the services page
 * styling.
 */
export const MissionStatementSection = () => {
  return (
    <section className="py-8 px-6 lg:px-8 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-sky-300 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Our mission is to help clients maintain financial viability in the
          present while taking a proactive approach to minimise tax burden,
          improve cash flows and assist with planning and succession. We believe
          that sustainable success stems from open communication, careful
          analysis and personalised strategies. That's why we take the time to
          understand your unique needs and goals before providing advice.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          We are committed to the highest standards of excellence and
          professionalism. By staying current on tax laws and best practices and
          by planning ahead, we help you navigate complexity with confidence.
          Whether you're an individual, small business or nonprofit, our goal is
          to provide competent, timely guidance that supports your long-term
          financial health.
        </p>
      </div>
    </section>
  );
};
