"use client";

import { useState } from "react";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface CalendarBookingProps {
  onBookingSuccess: () => void;
}

interface TimeSlot {
  time: string;
  available: boolean;
  reason?: string;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
}

export default function CalendarBooking({
  onBookingSuccess,
}: CalendarBookingProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [allSlots, setAllSlots] = useState<TimeSlot[]>([]);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [error, setError] = useState<string>("");
  const [step, setStep] = useState<"date" | "time" | "details">("date");

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split("T")[0];

  // Get date 30 days from now for max date
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateString = maxDate.toISOString().split("T")[0];

  // Check if a date is a weekend
  const isWeekend = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Sunday = 0, Saturday = 6
  };

  const handleDateChange = async (date: string) => {
    setSelectedDate(date);
    setSelectedTime("");
    setError("");
    setIsLoadingSlots(true);

    // Check if selected date is a weekend
    if (isWeekend(date)) {
      setError(
        "Appointments are not available on weekends. Please select a weekday (Monday-Friday)."
      );
      setAvailableSlots([]);
      setIsLoadingSlots(false);
      return;
    }

    try {
      const response = await fetch(`/api/calendar/availability?date=${date}`);
      const data = await response.json();

      if (data.success) {
        setAvailableSlots(data.availableSlots);
        setAllSlots(data.allSlots || []);
        setStep("time");
      } else {
        setError(data.error || "Failed to load available times");
        setAvailableSlots([]);
        setAllSlots([]);
      }
    } catch {
      setError("Failed to load available times. Please try again.");
      setAvailableSlots([]);
      setAllSlots([]);
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("details");
  };

  const formatTimeSlot = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatSelectedDateTime = () => {
    if (!selectedDate || !selectedTime) return "";

    const date = new Date(selectedTime);
    return date.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);
    setError("");

    try {
      const response = await fetch("/api/calendar/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dateTime: selectedTime,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      const data = await response.json();

      if (data.success) {
        onBookingSuccess();
      } else {
        setError(data.error || "Failed to book appointment");
      }
    } catch {
      setError("Failed to book appointment. Please try again.");
    } finally {
      setIsBooking(false);
    }
  };

  const handleBack = () => {
    if (step === "details") {
      setStep("time");
    } else if (step === "time") {
      setStep("date");
      setAvailableSlots([]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <HiOutlineCalendar className="w-6 h-6 text-sky-600 dark:text-sky-400 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Book Your Appointment
          </h2>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center space-x-4 mb-6">
          <div
            className={`flex items-center ${step === "date" ? "text-sky-600" : step === "time" || step === "details" ? "text-green-600" : "text-gray-400"}`}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${step === "date" ? "border-sky-600 bg-sky-50 dark:bg-sky-900" : step === "time" || step === "details" ? "border-green-600 bg-green-50 dark:bg-green-900" : "border-gray-300"}`}
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
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${step === "time" ? "border-sky-600 bg-sky-50 dark:bg-sky-900" : step === "details" ? "border-green-600 bg-green-50 dark:bg-green-900" : "border-gray-300"}`}
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
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${step === "details" ? "border-sky-600 bg-sky-50 dark:bg-sky-900" : "border-gray-300"}`}
            >
              3
            </div>
            <span className="ml-2 font-medium">Details</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}

      {/* Step 1: Date Selection */}
      {step === "date" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select a date for your appointment
          </label>
          <input
            type="date"
            value={selectedDate}
            min={today}
            max={maxDateString}
            onChange={(e) => handleDateChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
            disabled={isLoadingSlots}
          />
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            💼 Appointments are available Monday through Friday only
          </p>
          {isLoadingSlots && (
            <div className="flex items-center justify-center py-4">
              <LoadingSpinner />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                Loading available times...
              </span>
            </div>
          )}
        </div>
      )}

      {/* Step 2: Time Selection */}
      {step === "time" && (
        <div>
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
            <button
              onClick={handleBack}
              className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium"
            >
              ← Back
            </button>
          </div>

          {allSlots.length === 0 ? (
            <div className="text-center py-8">
              <HiOutlineClock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                No time slots found for this date.
              </p>
              <button
                onClick={handleBack}
                className="mt-4 text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium"
              >
                Choose another date
              </button>
            </div>
          ) : (
            <div>
              {availableSlots.length === 0 && (
                <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900 border border-amber-200 dark:border-amber-800 rounded-md">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    ⚠️ No available slots on this date. Unavailable times are
                    shown in red.
                  </p>
                </div>
              )}

              {/* Legend */}
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 border border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900 rounded mr-2"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Available
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900 rounded mr-2"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Unavailable
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {allSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={
                      slot.available
                        ? () => handleTimeSelect(slot.time)
                        : undefined
                    }
                    disabled={!slot.available}
                    className={`p-3 border rounded-md transition text-center font-medium ${
                      slot.available
                        ? "border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 hover:border-green-500 hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer"
                        : "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900 text-red-500 dark:text-red-400 cursor-not-allowed opacity-60"
                    }`}
                    title={slot.available ? undefined : slot.reason}
                  >
                    {formatTimeSlot(slot.time)}
                    {!slot.available && (
                      <div className="text-xs mt-1 opacity-75">
                        {slot.reason === "Past time" ? "Past" : "Taken"}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Contact Details */}
      {step === "details" && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Appointment Details
              </h3>
              <p className="text-sky-600 dark:text-sky-400 font-medium">
                {formatSelectedDateTime()}
              </p>
            </div>
            <button
              onClick={handleBack}
              className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium"
            >
              ← Back
            </button>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="bg-sky-50 dark:bg-sky-900 p-4 rounded-md">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                What to expect:
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• 30-minute focused consultation with our licensed CPA</li>
                <li>• Personalized tax and accounting advice</li>
                <li>• We&apos;ll contact you to confirm the appointment</li>
                <li>• Calendar invitation will be sent separately</li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={isBooking}
              className="w-full bg-sky-600 text-white py-3 px-6 rounded-md hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition font-medium flex items-center justify-center"
            >
              {isBooking ? (
                <>
                  <LoadingSpinner size="sm" />
                  <span className="ml-2">Booking Appointment...</span>
                </>
              ) : (
                "Book Appointment"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
