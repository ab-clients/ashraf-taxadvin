export const MissionStatementSection = () => {
  return (
    <section className="py-10 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
              Our Commitment
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 dark:text-yellow-300 mb-6">
              Our Mission
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Helping clients achieve financial viability while taking a
              proactive approach to minimize tax burden and improve cash flows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Our mission is to help clients maintain financial viability in
                the present while taking a proactive approach to minimise tax
                burden, improve cash flows and assist with planning and
                succession.
              </p>
              <p>
                We believe that sustainable success stems from open
                communication, careful analysis and personalised strategies.
                That&apos;s why we take the time to understand your unique needs
                and goals before providing advice.
              </p>
            </div>

            {/* Right Content */}
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                We are committed to the highest standards of excellence and
                professionalism. By staying current on tax laws and best
                practices and by planning ahead, we help you navigate complexity
                with confidence.
              </p>
              <p>
                Whether you&apos;re an individual, small business or nonprofit,
                our goal is to provide competent, timely guidance that supports
                your long-term financial health.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-2xl">
              <div className="w-12 h-12 bg-sky-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Excellence
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Highest standards in everything we do
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
              <div className="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Partnership
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building lasting client relationships
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Proactive
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Forward-thinking financial strategies
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
              <div className="w-12 h-12 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Innovation
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Creative solutions for complex challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
