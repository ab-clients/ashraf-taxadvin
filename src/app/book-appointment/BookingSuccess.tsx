"use client";

import { HiOutlineCheckCircle, HiOutlineCalendar } from "react-icons/hi";
import Link from "next/link";

interface BookingSuccessProps {
  onBookAnother: () => void;
}

export default function BookingSuccess({ onBookAnother }: BookingSuccessProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
          <HiOutlineCheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Appointment Booked Successfully!
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Thank you for scheduling your consultation with TaxAdvin.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
          What happens next?
        </h3>
        <ul className="text-sm text-green-700 dark:text-green-300 space-y-2 text-left">
          <li className="flex items-start">
            <span className="font-medium mr-2">✅</span>
            Your appointment has been successfully added to our calendar
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">📧</span>
            We&apos;ll contact you within 24 hours to confirm the details
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">📅</span>A calendar invitation
            will be sent to add the meeting to your calendar
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">⏰</span>
            You&apos;ll get reminder emails 24 hours and 1 hour before the
            meeting
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">💼</span>
            Prepare any documents or questions you&apos;d like to discuss
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <button
          onClick={onBookAnother}
          className="inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-md hover:bg-sky-700 transition font-medium mr-4"
        >
          <HiOutlineCalendar className="w-5 h-5 mr-2" />
          Book Another Appointment
        </button>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          Need to make changes to your appointment?{" "}
          <Link
            href="/contact"
            className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
          While you wait, explore our resources:
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/tax-center"
            className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Tax Center
          </Link>
          <Link
            href="/services"
            className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Our Services
          </Link>
          <Link
            href="/about"
            className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
