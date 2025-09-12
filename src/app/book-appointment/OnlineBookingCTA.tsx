interface OnlineBookingCTAProps {
  onStartBooking: () => void;
}

export default function OnlineBookingCTA({
  onStartBooking,
}: OnlineBookingCTAProps) {
  return (
    <div className="bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900 p-6 rounded-lg mb-8 text-center">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        📅 <br />
        Online Booking Available!
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Book instantly using our online calendar system. See real-time
        availability and get immediate confirmation.
      </p>
      <button
        onClick={onStartBooking}
        className="bg-sky-600 text-white px-8 py-3 rounded-md hover:bg-sky-700 transition font-medium text-lg"
      >
        Book Online Now
      </button>
    </div>
  );
}
