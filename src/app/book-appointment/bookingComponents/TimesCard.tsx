"use client";

import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setSelectedTime, setStep } from "@/store/bookingSlice";

type TimeSlot = {
  time: string;
  available: boolean;
  reason?: string;
};

export default function TimesCard() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    selectedDate,
    selectedTime,
    allSlots,
    isLoadingSlots,
    availabilityError,
  } = useSelector((state: RootState) => state.booking);

  const formatTimeSlot = (isoString: string) => {
    const date = new Date(isoString);
    return date
      .toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replaceAll("AM", "am")
      .replaceAll("PM", "pm")
      .replaceAll(" ", "");
  };

  const handleTimeSelect = (time: string) => {
    dispatch(setSelectedTime(time));
    dispatch(setStep("details"));
  };

  return (
    <div className="col-span-8 lg:col-span-5 border border-transparent dark:border-gray-700 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow dark:shadow-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Available times for{" "}
          {(() => {
            const [year, month, day] = selectedDate.split("-").map(Number);
            const localDate = new Date(year, month - 1, day);
            return localDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            });
          })()}
        </h3>
      </div>

      {isLoadingSlots ? (
        <div className="flex flex-col items-center justify-center py-8">
          <LoadingSpinner />
          <span className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Loading available times...
          </span>
          {availabilityError && (
            <div className="mt-4 bg-amber-50 dark:bg-amber-900 border border-amber-200 dark:border-amber-800 rounded-md p-3 shadow-sm">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                {availabilityError}
              </p>
            </div>
          )}
        </div>
      ) : availabilityError ? (
        <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900 border border-amber-200 dark:border-amber-800 rounded-md shadow-sm">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            {availabilityError}
          </p>
        </div>
      ) : allSlots.length === 0 ? (
        <div className="text-center py-8">
          <HiOutlineClock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            No time slots found for this date.
          </p>
        </div>
      ) : (
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 border border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900 rounded-full mr-2 shadow-sm"></div>
              <span className="text-gray-600 dark:text-gray-300">
                Available
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900 rounded-full mr-2 shadow-sm"></div>
              <span className="text-gray-600 dark:text-gray-300">
                Unavailable
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {allSlots.map((slot: TimeSlot, index: number) => {
              const isSelected = slot.time === selectedTime;
              return (
                <button
                  key={index}
                  onClick={
                    slot.available
                      ? () => handleTimeSelect(slot.time)
                      : undefined
                  }
                  disabled={!slot.available}
                  className={`p-3 border rounded-md text-center font-medium text-xs transition transform ${
                    slot.available
                      ? `border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 hover:scale-105 hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer ${isSelected ? "bg-sky-600 text-white dark:bg-sky-600 shadow-md scale-105" : ""}`
                      : "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900 text-red-500 dark:text-red-400 cursor-not-allowed opacity-60"
                  }`}
                  title={slot.available ? undefined : slot.reason}
                >
                  {formatTimeSlot(slot.time)}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
