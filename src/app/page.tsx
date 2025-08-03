import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Decorative gradient backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 opacity-70 dark:opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white">
            Your trusted partner for simple &amp; stress‑free financial
            solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-blue-50 dark:text-blue-100">
            Comprehensive tax and accounting services for individuals, small
            businesses and nonprofits across Florida – available locally or
            online.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-md text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
            >
              Schedule Your Free Consultation
            </a>
            <a
              href="#services"
              className="inline-block px-8 py-3 rounded-md text-base font-semibold text-blue-600 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 lg:px-8 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Why Choose TaxAdvin?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300 mx-auto text-center">
            We blend professional expertise with personalized service to deliver
            financial peace of mind. Here’s what sets us apart.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Certified Professionals */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm dark:bg-gray-900 dark:border dark:border-gray-700">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                {/* Icon placeholder (briefcase) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-8 h-8"
                >
                  <path d="M6 2a2 2 0 00-2 2v1H3a1 1 0 00-1 1v2h16V6a1 1 0 00-1-1h-1V4a2 2 0 00-2-2H6zm9 3H5V4a1 1 0 011-1h8a1 1 0 011 1v1z" />
                  <path d="M2 9v6a2 2 0 002 2h12a2 2 0 002-2V9H2zm5 3a1 1 0 012 0v1a1 1 0 01-2 0v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Certified &amp; Experienced
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Work with licensed CPAs and Enrolled Agents who stay up‑to‑date
                with ever‑changing tax laws, ensuring your returns and plans are
                compliant and optimized.
              </p>
            </div>
            {/* Personalized Service */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm dark:bg-gray-900 dark:border dark:border-gray-700">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                {/* Icon placeholder (user) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 100 8 4 4 0 000-8zm-3 7a3 3 0 116 0 3 3 0 01-6 0zm8 9a8 8 0 10-16 0 8 8 0 0016 0zm-14 0a6 6 0 1112 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Guidance
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                You’re never just another number. We take the time to understand
                your goals and tailor our services to your unique situation.
              </p>
            </div>
            {/* Local & Remote */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm dark:bg-gray-900 dark:border dark:border-gray-700">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                {/* Icon placeholder (globe) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.5A6.5 6.5 0 0015.52 7h-1.77A10 10 0 0110 16.5zm-2.75 0A10 10 0 013.25 7H1.98A6.5 6.5 0 007.25 16.5zM1.48 6h1.77A10 10 0 0110 3.5 6.5 6.5 0 001.48 6zM7.25 3.5A10 10 0 0010 8h3A10 10 0 0012.75 3.5H7.25zM10 8a6.5 6.5 0 016.27-4.5H13.5A10 10 0 0010 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local &amp; Remote</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Meet us in Oakland, NJ or connect virtually from anywhere. Our
                secure technology makes remote tax and bookkeeping effortless.
              </p>
            </div>
            {/* Multi‑language Support */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm dark:bg-gray-900 dark:border dark:border-gray-700">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                {/* Icon placeholder (language) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-8 h-8"
                >
                  <path d="M5 3a2 2 0 00-2 2v2.6l2 2V5h10v10H8.4l2 2H15a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
                  <path d="M13.68 14.32l-1.68-1.64-1.68 1.64.68.68 1-1 1 1 .68-.68zM7 7l1 2h4l1-2h-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Multi‑language Friendly
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We speak Arabic and English fluently, ensuring clear
                communication for a wider community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
            Our Services
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300 mx-auto text-center">
            From tax preparation and planning to bookkeeping, payroll and
            consultation, we’ve got you covered.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Tax Preparation */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md shadow-gray-500 dark:shadow-gray-950 flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                {/* Icon (document) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path d="M2 4a2 2 0 012-2h5.5L13 5.5V6h5v2H8a2 2 0 00-2 2v8H4a2 2 0 01-2-2V4z" />
                  <path d="M8 8a2 2 0 012-2h6l-4-4H4a2 2 0 00-2 2v12a2 2 0 002 2h5v-8a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Tax Preparation &amp; Planning
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                Maximize compliance and minimize stress by letting our team
                handle your individual or business returns. We ensure accuracy,
                leverage applicable deductions and credits, and strategize for
                your future.
              </p>
            </div>
            {/* Bookkeeping & QuickBooks */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md shadow-gray-500 dark:shadow-gray-950 flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                {/* Icon (book) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path d="M2 4a2 2 0 012-2h9a2 2 0 012 2v14l-1.586-1.586A2 2 0 0112 16H4a2 2 0 01-2-2V4z" />
                  <path d="M14 16V2h1a2 2 0 012 2v14l-3-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Bookkeeping &amp; QuickBooks
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                Stay organized with meticulous record‑keeping, transaction
                categorization and reconciliation. We’re QuickBooks experts and
                offer setup, training and ongoing management.
              </p>
            </div>
            {/* Payroll & Compliance */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md shadow-gray-500 dark:shadow-gray-950 flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                {/* Icon (credit card) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v3H2V4z" />
                  <path d="M2 9h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm3 3h2a1 1 0 100-2H5a1 1 0 000 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Payroll &amp; Compliance
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                Ensure your team is paid accurately and on time. Our payroll
                services include tax submissions and compliance monitoring to
                free up your time and reduce risk.
              </p>
            </div>
            {/* Nonprofit & Specialized Accounting */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md shadow-gray-500 dark:shadow-gray-950 flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                {/* Icon (heart) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657l-6.828-6.828a4 4 0 010-5.657z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Nonprofit &amp; Specialty
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                For nonprofits and specialized entities, we provide grant
                tracking, fund accounting and reporting to ensure transparency
                and regulatory compliance.
              </p>
            </div>
            {/* Business Consulting */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md shadow-gray-500 dark:shadow-gray-950 flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                {/* Icon (chart) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v6H2v-6zm5-4a1 1 0 011-1h2a1 1 0 011 1v10H7V7zm5-3a1 1 0 011-1h2a1 1 0 011 1v13h-4V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Advisory</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                Leverage decades of experience to improve cash flow, create
                efficient systems and build sustainable growth through strategic
                planning and financial analysis.
              </p>
            </div>
            {/* Estate & Trust / Other Services */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md shadow-gray-500 dark:shadow-gray-950 flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                {/* Icon (leaf) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path d="M10 2C5.736 2 2.5 5.236 2.5 9.5c0 6.264 7.5 8.5 7.5 8.5s7.5-2.236 7.5-8.5C17.5 5.236 14.264 2 10 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Estate &amp; Specialized
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                Get guidance on estate and trust planning, inheritance taxes and
                other specialized filings to protect your legacy and minimize
                tax impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300 mx-auto text-center">
            Our success is measured by the results we deliver and the trust we
            build. Here are a few words from those we’ve helped.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="p-6 rounded-lg bg-white shadow-sm shadow-gray-500 dark:shadow-gray-950 dark:bg-gray-900 dark:border dark:border-gray-700 flex flex-col">
              <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow">
                “TaxAdvin has been a game changer for my business. Their
                meticulous bookkeeping and proactive tax planning saved me
                countless hours and dollars.”
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
                  {/* Initials icon */}
                  <span className="font-bold">JD</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    John D.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Small Business Owner
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="p-6 rounded-lg bg-white shadow-sm shadow-gray-500 dark:shadow-gray-950 dark:bg-gray-900 dark:border dark:border-gray-700 flex flex-col">
              <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow">
                “As a nonprofit director, I rely on TaxAdvin’s expertise for
                grant reporting and fund accounting. Their guidance keeps us
                compliant and lets us focus on our mission.”
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
                  <span className="font-bold">SL</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Sarah L.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Nonprofit Director
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="p-6 rounded-lg bg-white shadow-sm shadow-gray-500 dark:shadow-gray-950 dark:bg-gray-900 dark:border dark:border-gray-700 flex flex-col">
              <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow">
                “I really appreciate how TaxAdvin explains complex tax issues in
                Arabic and English. Their patient service and deep knowledge
                gave me confidence in filing my return.”
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
                  <span className="font-bold">AM</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Ahmed M.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Individual Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 lg:px-8 bg-blue-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 dark:text-blue-400">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-blue-700 dark:text-gray-300">
              Contact us to schedule your free consultation or to learn more
              about how we can assist you. We look forward to partnering with
              you on your financial journey.
            </p>
            <dl className="mt-8 space-y-4">
              <div className="flex items-center">
                <dt className="sr-only">Phone</dt>
                <dd className="flex items-center text-blue-800 dark:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 mr-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5.5A3.5 3.5 0 015.5 2h9A3.5 3.5 0 0118 5.5v9a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 012 14.5v-9zM5 5a.5.5 0 00-.5.5v.585l2.646 2.647a.5.5 0 00.708 0L8 8.292l-3-3A.5.5 0 005 5zM15 15a.5.5 0 00-.5-.5h-1.585l-2.647-2.646a.5.5 0 00-.708 0L10 12.292l3 3A.5.5 0 0014.5 15H15z"
                      clipRule="evenodd"
                    />
                  </svg>
                  (201) 555‑0123
                </dd>
              </div>
              <div className="flex items-center">
                <dt className="sr-only">Email</dt>
                <dd className="flex items-center text-blue-800 dark:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 mr-3"
                  >
                    <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v1.086l-8 4.8-8-4.8V4zm0 3.114l7.483 4.49a1 1 0 001.034 0L18 7.114V16a2 2 0 01-2 2H4a2 2 0 01-2-2V7.114z" />
                  </svg>
                  info@taxadvin.com
                </dd>
              </div>
              <div className="flex items-center">
                <dt className="sr-only">Address</dt>
                <dd className="flex items-center text-blue-800 dark:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 mr-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 3.5A6.5 6.5 0 0112.949 3.5a6.5 6.5 0 11-7.899 7.9L10 16.293l4.95-4.95a6.5 6.5 0 10-9.9-7.843z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Oakland, NJ 07436
                </dd>
              </div>
            </dl>
          </div>
          {/* Contact Form Placeholder */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
