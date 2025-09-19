import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimeSlot {
  time: string;
  available: boolean;
  reason?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  meetingType: "" | "in-person" | "virtual";
}

interface BookingState {
  selectedDate: string;
  selectedTime: string;
  availableSlots: string[];
  allSlots: TimeSlot[];
  formData: BookingFormData;
  isLoadingSlots: boolean;
  isBooking: boolean;
  showBookingForm: boolean;
  bookingComplete: boolean;
  availabilityError: string;
  formError: string;
  step: "date" | "time" | "details";
}

const getTomorrowString = () => {
  const t = new Date();
  t.setDate(t.getDate() + 1);
  const day = t.getDay();
  // If tomorrow is Saturday (6), move to Monday (+2). If Sunday (0), move to Monday (+1).
  if (day === 6) t.setDate(t.getDate() + 2);
  if (day === 0) t.setDate(t.getDate() + 1);
  // Return local YYYY-MM-DD (avoid toISOString which uses UTC)
  const y = t.getFullYear();
  const m = String(t.getMonth() + 1).padStart(2, "0");
  const d = String(t.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

import { flippers } from "@/data/appData/flippers";

const initialState: BookingState = {
  selectedDate: getTomorrowString(),
  selectedTime: "",
  availableSlots: [],
  allSlots: [],
  formData: {
    name: "",
    email: "",
    phone: "",
    meetingType: flippers.enableCalendarBookingMeetingType ? "" : "virtual",
  },
  isLoadingSlots: false,
  isBooking: false,
  showBookingForm: false,
  bookingComplete: false,
  availabilityError: "",
  formError: "",
  step: "date",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setSelectedDate(state: BookingState, action: PayloadAction<string>) {
      state.selectedDate = action.payload;
    },
    setSelectedTime(state: BookingState, action: PayloadAction<string>) {
      state.selectedTime = action.payload;
    },
    setAvailableSlots(state: BookingState, action: PayloadAction<string[]>) {
      state.availableSlots = action.payload;
    },
    setAllSlots(state: BookingState, action: PayloadAction<TimeSlot[]>) {
      state.allSlots = action.payload;
    },
    setFormData(
      state: BookingState,
      action: PayloadAction<Partial<BookingFormData>>
    ) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setIsLoadingSlots(state: BookingState, action: PayloadAction<boolean>) {
      state.isLoadingSlots = action.payload;
    },
    setIsBooking(state: BookingState, action: PayloadAction<boolean>) {
      state.isBooking = action.payload;
    },
    setAvailabilityError(state: BookingState, action: PayloadAction<string>) {
      state.availabilityError = action.payload;
    },
    setFormError(state: BookingState, action: PayloadAction<string>) {
      state.formError = action.payload;
    },
    setShowBookingForm(state: BookingState, action: PayloadAction<boolean>) {
      state.showBookingForm = action.payload;
    },
    setBookingComplete(state: BookingState, action: PayloadAction<boolean>) {
      state.bookingComplete = action.payload;
    },
    setStep(state: BookingState, action: PayloadAction<BookingState["step"]>) {
      state.step = action.payload;
    },
    resetBooking(state: BookingState) {
      state.selectedTime = "";
      state.availableSlots = [];
      state.allSlots = [];
      state.formData = { name: "", email: "", phone: "", meetingType: "" };
      state.isLoadingSlots = false;
      state.isBooking = false;
      state.showBookingForm = false;
      state.bookingComplete = false;
      state.availabilityError = "";
      state.formError = "";
      state.step = "date";
      state.selectedDate = getTomorrowString();
    },
  },
});

export const {
  setSelectedDate,
  setSelectedTime,
  setAvailableSlots,
  setAllSlots,
  setFormData,
  setIsLoadingSlots,
  setIsBooking,
  setAvailabilityError,
  setFormError,
  setShowBookingForm,
  setBookingComplete,
  setStep,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
