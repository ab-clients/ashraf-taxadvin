"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What documents do I need to get started?",
    answer:
      "You'll typically need your W-2s, 1099s, last year's tax return, receipts for deductions, and relevant business or investment documents.",
  },
  {
    question: "Is my information secure with TaxAdvin?",
    answer:
      "Yes. We use secure portals and strong encryption to protect your personal and financial data.",
  },
  {
    question: "Can I file both personal and business taxes?",
    answer:
      "Yes, we handle both personal and business returns, including LLCs and sole proprietors.",
  },
  {
    question: "Do you offer year-round support?",
    answer:
      "Absolutely. Our team is available all year for your tax questions—not just during tax season.",
  },
  {
    question: "What if I get audited?",
    answer:
      "We provide audit support and guidance. We'll help you understand and respond to IRS notices.",
  },
  {
    question: "Can you help with back taxes or unfiled returns?",
    answer:
      "Yes, we regularly help clients resolve back taxes and file unfiled returns.",
  },
  {
    question: "Do you work with clients in all states?",
    answer:
      "Yes, we serve clients nationwide and can file federal and all state returns.",
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
