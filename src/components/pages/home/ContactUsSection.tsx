import React from "react";

export const ContactUsSection = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 lg:px-8 bg-sky-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 dark:text-sky-400">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-sky-700 dark:text-gray-300">
            Contact us to schedule your free consultation or to learn more about
            how we can assist you. We look forward to partnering with you on
            your financial journey.
          </p>
          <dl className="mt-8 space-y-4">
            <div className="flex items-center">
              <dt className="sr-only">Phone</dt>
              <dd className="flex items-center text-sky-800 dark:text-sky-300">
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
              <dd className="flex items-center text-sky-800 dark:text-sky-300">
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
              <dd className="flex items-center text-sky-800 dark:text-sky-300">
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
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-500"
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
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-500"
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
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-500"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-sky-500 dark:hover:bg-sky-600 dark:focus:ring-sky-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
