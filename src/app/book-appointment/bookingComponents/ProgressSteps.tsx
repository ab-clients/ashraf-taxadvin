"use client";

import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

export default function ProgressSteps() {
  const step = useSelector<RootState>((state) => state.booking.step);

  return (
    <div className="flex items-center space-x-4 mb-6">
      <div
        className={`flex items-center ${step === "date" ? "text-sky-600" : step === "time" || step === "details" ? "text-green-600" : "text-gray-400"}`}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-shadow transform ${step === "date" ? "border-sky-600 bg-sky-50 dark:bg-sky-900 shadow-sm" : step === "time" || step === "details" ? "border-green-600 bg-green-50 dark:bg-green-900 shadow-sm" : "border-gray-300"}`}
        >
          1
        </div>
        <span className="ml-2 font-medium">Date</span>
      </div>

      <div
        className={`w-8 h-0.5 ${step === "time" || step === "details" ? "bg-green-600" : "bg-gray-300"}`}
      ></div>

      <div
        className={`flex items-center ${step === "time" ? "text-sky-600" : step === "details" ? "text-green-600" : "text-gray-400"}`}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-shadow transform ${step === "time" ? "border-sky-600 bg-sky-50 dark:bg-sky-900 shadow-sm" : step === "details" ? "border-green-600 bg-green-50 dark:bg-green-900 shadow-sm" : "border-gray-300"}`}
        >
          2
        </div>
        <span className="ml-2 font-medium">Time</span>
      </div>

      <div
        className={`w-8 h-0.5 ${step === "details" ? "bg-green-600" : "bg-gray-300"}`}
      ></div>

      <div
        className={`flex items-center ${step === "details" ? "text-sky-600" : "text-gray-400"}`}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-shadow transform ${step === "details" ? "border-sky-600 bg-sky-50 dark:bg-sky-900 shadow-sm" : "border-gray-300"}`}
        >
          3
        </div>
        <span className="ml-2 font-medium">Details</span>
      </div>
    </div>
  );
}
