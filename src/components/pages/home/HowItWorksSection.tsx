// components/HowItWorksSection.tsx
import {
  FaFileUpload,
  FaUserCheck,
  FaCreditCard,
  FaPaperPlane,
} from "react-icons/fa";
import Link from "next/link";

export const HowItWorksSection: React.FC = () => (
  <section
    id="how-it-works"
    className="py-16 bg-white dark:bg-gray-900"
    aria-label="How It Works"
  >
    <div className="max-w-6xl mx-auto text-center px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
        How It Works
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Our proven flat‑fee process simplifies your tax filing into four clear
        steps—no surprises.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Step 1 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900">
            <FaFileUpload
              className="h-8 w-8 text-sky-600 dark:text-sky-300"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            1. Upload Docs
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Securely submit W‑2s, 1099s, and business records via our encrypted
            portal.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900">
            <FaUserCheck
              className="h-8 w-8 text-sky-600 dark:text-sky-300"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            2. Review & Advise
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            A licensed professional evaluates your documents and flags all
            legal–deduction opportunities.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900">
            <FaCreditCard
              className="h-8 w-8 text-sky-600 dark:text-sky-300"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            3. Approve & Pay
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Review the draft return in your portal—pay only after you approve
            it.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900">
            <FaPaperPlane
              className="h-8 w-8 text-sky-600 dark:text-sky-300"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            4. File & Support
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We e‑file your return and offer 30-day post-filing support for any
            questions.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Link href="/services" legacyBehavior>
          <a className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  </section>
);
