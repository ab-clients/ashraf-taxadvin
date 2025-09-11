import Link from "next/link";
import { ContactUsForm } from "./ContactUsForm";
import {
  HiOutlineCalendar,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

export default function Contact() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 dark:from-sky-800 dark:to-blue-900 py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Let&apos;s Work Together
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to take control of your finances? Schedule a free consultation
            or send us a message. We&apos;re here to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center bg-white text-sky-700 font-semibold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              <HiOutlineCalendar className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Link>
            <a
              href="tel:+14077267901"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-sky-700 transition"
            >
              <HiOutlinePhone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm opacity-90">
            <div className="flex items-center">
              <span className="mr-1">✓</span>
              Free 30-min consultation
            </div>
            <div className="flex items-center">
              <span className="mr-1">✓</span>
              Licensed CPA
            </div>
            <div className="flex items-center">
              <span className="mr-1">✓</span>
              Virtual & in-person meetings
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Send Us a Message
              </h2>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                Have a specific question or need assistance? Fill out the form
                below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactUsForm />
            </div>

            <div className="h-full flex flex-col space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <HiOutlineMail className="w-5 h-5 text-sky-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        Email
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        contact@taxadvin.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <HiOutlinePhone className="w-5 h-5 text-sky-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        Phone
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        (407) 726-7901
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Business Hours
                  </h4>
                  <div className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>By appointment only</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-xl p-8 flex-shrink-0">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-100 dark:bg-sky-800 rounded-full mb-4">
                    <HiOutlineCalendar className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Prefer to Schedule Directly?
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Skip the back-and-forth emails and book your free
                    consultation at a time that works for you.
                  </p>

                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-700 transition"
                  >
                    <HiOutlineCalendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
