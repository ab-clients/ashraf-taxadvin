import { HiOutlineCheckCircle } from "react-icons/hi";

export default function FeaturesPreview() {
  return (
    <div className="border-t border-gray-200 dark:border-gray-600 pt-8">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
        What you get with online booking:
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <HiOutlineCheckCircle className="text-green-500 mr-2 w-4 h-4" />
          Real-time calendar availability
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <HiOutlineCheckCircle className="text-green-500 mr-2 w-4 h-4" />
          Automatic confirmation emails
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <HiOutlineCheckCircle className="text-green-500 mr-2 w-4 h-4" />
          30-minute focused consultation
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <HiOutlineCheckCircle className="text-green-500 mr-2 w-4 h-4" />
          Calendar reminders
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <HiOutlineCheckCircle className="text-green-500 mr-2 w-4 h-4" />
          Instant booking confirmation
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <HiOutlineCheckCircle className="text-green-500 mr-2 w-4 h-4" />
          Professional calendar invite
        </div>
      </div>
    </div>
  );
}
