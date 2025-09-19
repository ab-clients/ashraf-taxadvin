"use client";

import DateCard from "@/app/book-appointment/bookingComponents/DateCard";
import DetailsForm from "@/app/book-appointment/bookingComponents/DetailsForm";
import ProgressSteps from "@/app/book-appointment/bookingComponents/ProgressSteps";
import TimesCard from "@/app/book-appointment/bookingComponents/TimesCard";
import {
  setAllSlots,
  setAvailabilityError,
  setAvailableSlots,
  setIsLoadingSlots,
  setStep,
} from "@/store/bookingSlice";
import type { AppDispatch, RootState } from "@/store/index";
import { useEffect } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

// TimeSlot is defined in TimesCard; no local type needed here.

export default function CalendarBooking() {
  const dispatch = useDispatch<AppDispatch>();

  const { selectedDate, formError } = useSelector(
    (state: RootState) => state.booking
  );

  // Check if a date is a weekend
  const isWeekend = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Sunday = 0, Saturday = 6
  };

  useEffect(() => {
    if (!selectedDate) return;

    const load = async (date: string) => {
      dispatch(setAvailabilityError(""));
      dispatch(setIsLoadingSlots(true));

      if (isWeekend(date)) {
        dispatch(
          setAvailabilityError(
            "Appointments are not available on weekends. Please select a weekday (Monday-Friday)."
          )
        );
        dispatch(setAvailableSlots([]));
        dispatch(setAllSlots([]));
        dispatch(setIsLoadingSlots(false));
        return;
      }

      try {
        const response = await fetch(`/api/calendar/availability?date=${date}`);
        const data = await response.json();

        if (data.success) {
          dispatch(setAvailableSlots(data.availableSlots));
          dispatch(setAllSlots(data.allSlots || []));
          dispatch(setStep("time"));
        } else {
          dispatch(
            setAvailabilityError(data.error || "Failed to load available times")
          );
          dispatch(setAvailableSlots([]));
          dispatch(setAllSlots([]));
        }
      } catch {
        dispatch(
          setAvailabilityError(
            "Failed to load available times. Please try again."
          )
        );
        dispatch(setAvailableSlots([]));
        dispatch(setAllSlots([]));
      } finally {
        dispatch(setIsLoadingSlots(false));
      }
    };

    load(selectedDate);
  }, [selectedDate, dispatch]);

  return (
    <div className="bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-xl p-8 ring-1 ring-sky-50 dark:ring-0">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <HiOutlineCalendar className="w-6 h-6 text-sky-600 dark:text-sky-400 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Book Your Appointment
          </h2>
        </div>
        <ProgressSteps />
      </div>

      {formError && (
        <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 px-4 py-3 rounded-md mb-6">
          {formError}
        </div>
      )}

      <div className="grid grid-cols-8 gap-6 mb-6">
        <DateCard />
        <TimesCard />
      </div>
      <DetailsForm />
    </div>
  );
}
