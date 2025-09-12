import { HiOutlineCalendar } from "react-icons/hi";

export default function BookingHeader() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-100 dark:bg-sky-900 rounded-full mb-6">
        <HiOutlineCalendar className="w-10 h-10 text-sky-600 dark:text-sky-400" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Ready to Schedule?
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Choose your preferred way to book your consultation with our licensed
        CPA.
      </p>
    </div>
  );
}
