import { HiOutlineCalendar } from "react-icons/hi";

export default function BookingHeader() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-100 dark:bg-sky-900 rounded-full mb-6">
        <HiOutlineCalendar className="w-10 h-10 text-sky-600 dark:text-sky-400" />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Book Your Appointment
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Schedule a free 30-minute consultation with our licensed CPA. We&apos;re
        here to help with all your tax and accounting needs.
      </p>
    </div>
  );
}
