"use client";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useState } from "react";
import { NewsletterModal } from "@/components/tax-center/NewsletterModal";

export function NewsletterCard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg focus:outline-none w-full"
        type="button"
        data-aos="flip-up"
      >
        <HiOutlineMailOpen className="w-10 h-10 text-sky-600 mb-4" />
        <h3 className="font-semibold mb-2">Free Newsletter</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Monthly tax tips, IRS updates, and money-saving advice.
        </p>
      </button>
      <NewsletterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
