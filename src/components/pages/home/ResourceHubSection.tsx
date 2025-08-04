import {
  HiOutlineCalendar,
  HiOutlineReceiptTax,
  HiOutlineMailOpen,
} from "react-icons/hi";

export const ResourceHubSection = () => (
  <section className="py-16 px-6 bg-gray-200 dark:bg-gray-800">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
        Tax Tools & Resources
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
        Explore our free tools and guides to track refund status, plan ahead,
        and stay informed.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href="/tax-center/due-dates"
          className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg"
        >
          <HiOutlineCalendar className="w-10 h-10 text-sky-600 mb-4" />
          <h3 className="font-semibold mb-2">Important Tax Deadlines</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Never miss a filing or payment date again.
          </p>
        </a>

        <a
          href="/tax-center/calculators"
          className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg"
        >
          <HiOutlineReceiptTax className="w-10 h-10 text-sky-600 mb-4" />
          <h3 className="font-semibold mb-2">Tax & Budget Calculators</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Estimate refund, credits, and manage expense budgets.
          </p>
        </a>

        <a
          href="/newsletter"
          className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg"
        >
          <HiOutlineMailOpen className="w-10 h-10 text-sky-600 mb-4" />
          <h3 className="font-semibold mb-2">Free Newsletter</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Monthly tax tips, IRS updates, and money-saving advice.
          </p>
        </a>
      </div>
      <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
        Based on resource hubs seen on Florida firm websites like Professional
        Tax Services—features include refund tracking, tax due dates,
        calculators, and newsletter signup links
      </p>
    </div>
  </section>
);
