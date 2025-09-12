import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function AlternativeContactOptions() {
  return (
    <div className="border-t border-gray-200 dark:border-gray-600 pt-8">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
        Or contact us directly:
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-3 w-full justify-center">
            <HiOutlineMail className="w-5 h-5 text-sky-600 dark:text-sky-400 mr-2" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Email Us
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Send us a message and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition font-medium"
          >
            Contact Form
          </Link>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-3 w-full justify-center">
            <HiOutlinePhone className="w-5 h-5 text-sky-600 dark:text-sky-400 mr-2" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Call Us
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Speak with our team directly to schedule your consultation.
          </p>
          <a
            href="tel:+14077267901"
            className="inline-block bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition font-medium"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
