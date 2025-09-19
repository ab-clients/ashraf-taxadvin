"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store/index";
import { HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { flippers } from "@/data/appData/flippers";
import {
  setSelectedDate,
  setSelectedTime,
  setAvailableSlots,
  setAllSlots,
  setFormData,
  setIsLoadingSlots,
  setIsBooking,
  setAvailabilityError,
  setFormError,
  setStep,
} from "@/store/bookingSlice";

interface CalendarBookingProps {
  onBookingSuccess: () => void;
}

type TimeSlot = {
  time: string;
  available: boolean;
  reason?: string;
};

export default function CalendarBooking({
  onBookingSuccess,
}: CalendarBookingProps) {
  const dispatch = useDispatch<AppDispatch>();

  const {
    selectedDate,
    selectedTime,
    availableSlots,
    allSlots,
    formData,
    isLoadingSlots,
    isBooking,
    availabilityError,
    formError,
    step,
  } = useSelector((state: RootState) => state.booking);

  // min/max date constraints handled by Calendar component

  // Check if a date is a weekend
  const isWeekend = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Sunday = 0, Saturday = 6
  };

  // Load slots when selectedDate changes (including initial mount)
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

  // (Availability is loaded via useEffect when selectedDate changes)

  const handleTimeSelect = (time: string) => {
    dispatch(setSelectedTime(time));
    dispatch(setStep("details"));
  };

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
    dispatch(setIsBooking(true));
    dispatch(setFormError(""));

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
          meetingType: formData.meetingType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        onBookingSuccess();
      } else {
        dispatch(setFormError(data.error || "Failed to book appointment"));
      }
    } catch {
      dispatch(setFormError("Failed to book appointment. Please try again."));
    } finally {
      dispatch(setIsBooking(false));
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

      {formError && (
        <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 px-4 py-3 rounded-md mb-6">
          {formError}
        </div>
      )}

      {/* Always-visible calendar + times layout */}
      <div className="grid grid-cols-8 gap-6 mb-6">
        {/* Left: Date picker (~3/8 on lg and up, full-width on small) */}
        <div className="col-span-8 lg:col-span-3 border rounded-2xl p-4 shadow-sm dark:shadow-gray-50">
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
              // build local YYYY-MM-DD instead of using toISOString()
              const y = date.getFullYear();
              const m = String(date.getMonth() + 1).padStart(2, "0");
              const d = String(date.getDate()).padStart(2, "0");
              const iso = `${y}-${m}-${d}`;
              dispatch(setSelectedDate(iso));
            }}
            className="bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-md mx-auto"
            captionLayout="dropdown"
            mode="single"
            required
          />
        </div>

        {/* Right: Times list (~5/8 on lg and up, full-width on small) */}
        <div className="col-span-8 lg:col-span-5 border rounded-2xl p-4 shadow-sm dark:shadow-gray-50">
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
                <div className="mt-4 bg-amber-50 dark:bg-amber-900 border border-amber-200 dark:border-amber-800 rounded-md p-3">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    {availabilityError}
                  </p>
                </div>
              )}
            </div>
          ) : availabilityError ? (
            <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900 border border-amber-200 dark:border-amber-800 rounded-md">
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

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
                {allSlots.map((slot: TimeSlot, index: number) => (
                  <button
                    key={index}
                    onClick={
                      slot.available
                        ? () => handleTimeSelect(slot.time)
                        : undefined
                    }
                    disabled={!slot.available}
                    className={`p-3 border rounded-md transition text-center font-medium text-xs ${
                      slot.available
                        ? "border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 hover:border-green-500 hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer"
                        : "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900 text-red-500 dark:text-red-400 cursor-not-allowed opacity-60"
                    }`}
                    title={slot.available ? undefined : slot.reason}
                  >
                    {formatTimeSlot(slot.time)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Step 3: Contact Details */}
      {step === "details" && (
        <div className="border rounded-2xl p-4 shadow-sm dark:shadow-gray-50">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Appointment Details
              </h3>
              <p className="text-sky-600 dark:text-sky-400 font-medium">
                {formatSelectedDateTime()}
              </p>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  dispatch(setFormData({ name: e.target.value }))
                }
                className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  dispatch(setFormData({ email: e.target.value }))
                }
                className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number *
              </label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  dispatch(setFormData({ phone: e.target.value }))
                }
                className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            {flippers.enableCalendarBookingMeetingType && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meeting Type *
                </label>
                <Select
                  value={formData.meetingType}
                  onValueChange={(value) =>
                    dispatch(
                      setFormData({
                        meetingType: value as "" | "in-person" | "virtual",
                      })
                    )
                  }
                  required
                >
                  <SelectTrigger
                    id="meetingType"
                    className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 
            text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 
            focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
                  >
                    <SelectValue
                      placeholder="Select meeting type"
                      className="text-gray-600 dark:text-gray-400"
                    />
                  </SelectTrigger>
                  <SelectContent
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 
            shadow-lg rounded-md mt-1 p-0"
                  >
                    <SelectGroup>
                      <SelectLabel>Meeting Types</SelectLabel>
                      <SelectItem value="virtual">
                        Virtual (Google Meet)
                      </SelectItem>
                      <SelectItem value="in-person">In Person</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="bg-sky-50 dark:bg-sky-900 p-4 rounded-md">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                What to expect:
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  • FREE 30-minute focused consultation with our licensed CPA
                </li>
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
