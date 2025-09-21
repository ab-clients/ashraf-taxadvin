"use client";

import { AppDispatch } from "@/store";
import {
  setBookingComplete,
  setServiceSlug,
  setShowBookingForm,
} from "@/store/bookingSlice";
import { useDispatch } from "react-redux";
import React from "react";

type Props = {
  serviceSlug: string;
};

export const ServiceConsultationButton = ({ serviceSlug }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleConsultationClick = () => {
    dispatch(setShowBookingForm(true));
    dispatch(setBookingComplete(false));
    dispatch(setServiceSlug(serviceSlug));
  };

  return (
    <button onClick={handleConsultationClick}>
      Book 30-minute free consultation
    </button>
  );
};
