"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What makes TaxAdvin different from other accounting firms?",
    answer:
      "We're licensed CPAs offering both traditional tax services and Fractional CFO expertise. You get enterprise-level financial leadership without the full-time cost, plus we serve clients nationwide with bilingual support in English and Arabic.",
  },
  {
    question: "Do you serve clients outside of Florida?",
    answer:
      "Yes, we serve clients nationwide with both virtual consultations and in-person meetings. Our secure technology makes remote tax preparation and bookkeeping seamless regardless of your location.",
  },
  {
    question: "What is a Fractional CFO and do I need one?",
    answer:
      "A Fractional CFO provides strategic financial leadership part-time. If you need expert financial guidance, cash flow management, or business growth planning without hiring a full-time CFO, our fractional services are perfect for your business.",
  },
  {
    question: "Can you help with both personal and business finances?",
    answer:
      "Absolutely. We handle individual tax returns, business taxes (LLCs, corporations, partnerships), bookkeeping, payroll, and provide comprehensive financial consulting for both personal and business needs.",
  },
  {
    question: "Do you provide year-round support or just during tax season?",
    answer:
      "We provide year-round support. Tax planning, bookkeeping, payroll, and fractional CFO services continue throughout the year. You're never left wondering about your finances.",
  },
  {
    question: "How does the free consultation work?",
    answer:
      "Schedule a free 30-minute consultation where we'll discuss your specific needs, explain how we can help, and provide actionable insights. No obligation, no pressure—just expert guidance to help you make informed decisions.",
  },
  {
    question: "What if I need help in Arabic?",
    answer:
      "We're fluent in both English and Arabic (نتحدث العربية). We can conduct consultations, explain financial concepts, and provide all services in your preferred language for clear communication.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-sky-700 dark:text-sky-200">
          Frequently Asked Questions
        </h2>
        <ul className="divide-y divide-sky-100 dark:divide-sky-900">
          {faqs.map((faq, idx) => (
            <li key={idx}>
              <button
                className="w-full flex justify-between items-center text-left py-3 focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span className="font-medium">{faq.question}</span>
                {open === idx ? (
                  <FaChevronUp className="text-sky-600 dark:text-sky-300" />
                ) : (
                  <FaChevronDown className="text-sky-600 dark:text-sky-300" />
                )}
              </button>
              {open === idx && (
                <div className="pl-1 pr-2 pb-3 text-sm text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
