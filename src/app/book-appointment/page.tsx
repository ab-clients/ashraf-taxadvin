import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Appointment | TaxAdvin",
  description:
    "Schedule a consultation with our licensed CPA. Get expert tax and accounting advice tailored to your needs.",
  keywords:
    "book appointment, tax consultation, CPA meeting, tax advisor, accounting services",
};

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation with our licensed CPA.
            We&apos;re here to help with all your tax and accounting needs.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-100 dark:bg-sky-900 rounded-full mb-6">
              <svg
                className="w-10 h-10 text-sky-600 dark:text-sky-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Online Booking Coming Soon!
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re building an easy-to-use online booking system that will
              allow you to schedule appointments directly from this page. In the
              meantime, please reach out to us using one of the methods below.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                📧 Email Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Send us a message and we&apos;ll get back to you within 24
                hours.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition font-medium"
              >
                Contact Form
              </Link>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                📞 Call Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Speak with our team directly to schedule your consultation.
              </p>
              <a
                href="tel:+1234567890"
                className="inline-block bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition font-medium"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Features Preview */}
          <div className="border-t border-gray-200 dark:border-gray-600 pt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              What to expect when booking is live:
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-2">✓</span>
                Real-time calendar availability
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-2">✓</span>
                Automatic confirmation emails
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-2">✓</span>
                Choose virtual or in-person meetings
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-2">✓</span>
                Calendar reminders
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-2">✓</span>
                Reschedule or cancel easily
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-green-500 mr-2">✓</span>
                Preparation materials sent beforehand
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to get started with your tax and accounting needs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-8 py-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium"
            >
              View Our Services
            </Link>
            <Link
              href="/about"
              className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-8 py-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
