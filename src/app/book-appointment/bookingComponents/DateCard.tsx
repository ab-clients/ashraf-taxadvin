"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import type { AppDispatch, RootState } from "@/store/index";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedDate,
  setSelectedTime,
  setStep,
} from "@/store/bookingSlice";

export default function DateCard() {
  const dispatch = useDispatch<AppDispatch>();
  const todayDate = new Date();

  const startMonth = new Date(todayDate.getFullYear(), todayDate.getMonth());
  const endMonth = new Date(todayDate.getFullYear(), todayDate.getMonth() + 4);
  const disableAfter = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth() + 3,
    0
  );

  const { selectedDate } = useSelector((state: RootState) => state.booking);

  return (
    <div className="col-span-8 lg:col-span-3 border border-transparent dark:border-gray-700 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow dark:shadow-gray-700">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Select a date for your appointment
      </label>
      <Calendar
        selected={
          selectedDate
            ? ((): Date => {
                const [y, m, d] = selectedDate.split("-").map(Number);
                return new Date(y, m - 1, d);
              })()
            : undefined
        }
        onSelect={(date: Date) => {
          if (!date) return;
          const y = date.getFullYear();
          const m = String(date.getMonth() + 1).padStart(2, "0");
          const d = String(date.getDate()).padStart(2, "0");
          const iso = `${y}-${m}-${d}`;
          dispatch(setSelectedTime(""));
          dispatch(setStep("time"));
          dispatch(setSelectedDate(iso));
        }}
        className="bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-md mx-auto"
        captionLayout="dropdown"
        mode="single"
        startMonth={startMonth}
        endMonth={endMonth}
        disabled={[
          {
            before: todayDate,
            after: disableAfter,
          },
          { dayOfWeek: [0, 6] }, // Disable weekends (Sunday=0, Saturday=6)
        ]}
        showOutsideDays={false}
        required
      />
    </div>
  );
}
