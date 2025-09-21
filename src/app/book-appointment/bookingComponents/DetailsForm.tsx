"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import {
  resetBooking,
  setBookingComplete,
  setFormData,
  setFormError,
  setIsBooking,
  type BookingFormData,
} from "@/store/bookingSlice";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { flippers } from "@/data/appData/flippers";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import {
  allServices,
  businessServices,
  individualServices,
} from "@/data/services/allServicesData";

export default function DetailsForm() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    selectedDate,
    selectedTime,
    isBooking,
    formData,
    step,
    isLoadingSlots,
    availabilityError,
    serviceSlug,
  } = useSelector((state: RootState) => state.booking);

  const serviceTitle = allServices.find((s) => s.slug === serviceSlug)?.title;

  const handleChange = (patch: Partial<BookingFormData>) => {
    dispatch(setFormData(patch));
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
          serviceSlug: formData.serviceSlug,
        }),
      });

      const data = await response.json();

      if (data.success) {
        dispatch(resetBooking());
        dispatch(setBookingComplete(true));
      } else {
        dispatch(setFormError(data.error || "Failed to book appointment"));
      }
    } catch {
      dispatch(setFormError("Failed to book appointment. Please try again."));
    } finally {
      dispatch(setIsBooking(false));
    }
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

  if (step !== "details" || isLoadingSlots || availabilityError) return null;

  return (
    <div className="border rounded-2xl p-4 shadow-md dark:shadow-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
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
            onChange={(e) => handleChange({ name: e.target.value })}
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
            onChange={(e) => handleChange({ email: e.target.value })}
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
            onChange={(e) => handleChange({ phone: e.target.value })}
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
                handleChange({
                  meetingType: value as BookingFormData["meetingType"],
                })
              }
              required
            >
              <SelectTrigger
                id="meetingType"
                className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
              >
                <SelectValue
                  placeholder="Select meeting type"
                  className="text-gray-600 dark:text-gray-400"
                />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md mt-1 p-0">
                <SelectGroup>
                  <SelectLabel>Meeting Types</SelectLabel>
                  <SelectItem value="virtual">Virtual (Google Meet)</SelectItem>
                  <SelectItem value="in-person">In Person</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Service
          </label>
          <Select
            value={serviceSlug || formData.serviceSlug || ""}
            onValueChange={(value) =>
              handleChange({
                serviceSlug: value as BookingFormData["serviceSlug"],
              })
            }
            required={false}
          >
            <SelectTrigger
              id="serviceSlug"
              className="rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 focus:border-sky-400 focus:ring-sky-400/40 transition-colors"
            >
              <SelectValue
                placeholder="Select Service"
                className="text-gray-600 dark:text-gray-400"
              />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md mt-1 p-0">
              <SelectGroup>
                <SelectLabel className="text-emerald-700 dark:text-emerald-400">
                  Individual Services
                </SelectLabel>
                <SelectItem
                  className="pl-4 text-gray-900 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-sky-800/40 px-4 py-2 rounded"
                  key="general-consultation-individual"
                  value="general-consultation-individual"
                >
                  General Consultation (Individual)
                </SelectItem>
                {individualServices.map((service) => (
                  <SelectItem
                    className="pl-4 text-gray-900 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-sky-800/40 px-4 py-2 rounded"
                    key={service.slug}
                    value={service.slug}
                  >
                    {service.title}
                  </SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel className="text-blue-600 dark:text-blue-400">
                  Business Services
                </SelectLabel>
                <SelectItem
                  className="pl-4 text-gray-900 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-sky-800/40 px-4 py-2 rounded"
                  key="general-consultation-business"
                  value="general-consultation-business"
                >
                  General Consultation (Business)
                </SelectItem>
                {businessServices.map((service) => (
                  <SelectItem
                    className="pl-4 text-gray-900 dark:text-gray-100 hover:bg-sky-50 dark:hover:bg-sky-800/40 px-4 py-2 rounded"
                    key={service.slug}
                    value={service.slug}
                  >
                    {service.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-sky-50 dark:bg-sky-900 p-4 rounded-md">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            What to expect:
          </h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• FREE 30-minute focused consultation with our licensed CPA</li>
            <li>• Personalized tax and accounting advice</li>
            <li>• We&apos;ll contact you to confirm the appointment</li>
            <li>• Calendar invitation will be sent separately</li>
          </ul>
        </div>
        <button
          type="submit"
          disabled={isBooking}
          className="w-full bg-sky-600 text-white py-3 px-6 rounded-md hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition transform hover:scale-[1.01] shadow-lg font-medium flex items-center justify-center"
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
  );
}
