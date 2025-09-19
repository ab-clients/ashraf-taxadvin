"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store/index";
import CalendarBooking from "@/app/book-appointment/CalendarBooking";
import { setShowBookingForm, setBookingComplete } from "@/store/bookingSlice";
import BookingSuccess from "@/app/book-appointment/BookingSuccess";
import BookingHeader from "@/app/book-appointment/BookingHeader";
import OnlineBookingCTA from "@/app/book-appointment/OnlineBookingCTA";
import AlternativeContactOptions from "@/app/book-appointment/AlternativeContactOptions";
import FeaturesPreview from "@/app/book-appointment/FeaturesPreview";

// Note: Metadata cannot be used in client components, so we'll handle this differently
export default function BookAppointmentPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { showBookingForm, bookingComplete } = useSelector(
    (s: RootState) => s.booking
  );

  const handleStartBooking = () => {
    dispatch(setShowBookingForm(true));
    dispatch(setBookingComplete(false));
  };

  const handleBookAnother = () => {
    dispatch(setShowBookingForm(true));
    dispatch(setBookingComplete(false));
  };

  const handleBackToOptions = () => {
    dispatch(setShowBookingForm(false));
    dispatch(setBookingComplete(false));
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Booking Success State */}
        {bookingComplete && (
          <BookingSuccess onBookAnother={handleBookAnother} />
        )}

        {/* Booking Form State */}
        {!bookingComplete && showBookingForm && (
          <div>
            <div className="mb-6">
              <button
                onClick={handleBackToOptions}
                className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium"
              >
                ← Back to booking options
              </button>
            </div>
            <CalendarBooking />
          </div>
        )}

        {/* Initial Options State */}
        {!showBookingForm && !bookingComplete && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            <BookingHeader />
            <OnlineBookingCTA onStartBooking={handleStartBooking} />
            <FeaturesPreview />
            <AlternativeContactOptions />
          </div>
        )}
      </div>
    </main>
  );
}
