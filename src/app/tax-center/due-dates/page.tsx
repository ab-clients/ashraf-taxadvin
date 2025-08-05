"use client";

import { useState } from "react";
import { MonthGrid } from "@/components/tax-center/MonthGrid";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function DueDatesPage() {
  const year = 2026;
  const [activeMonth, setActiveMonth] = useState<number>(0);

  return (
    <main className="px-4 py-8 max-w-5xl mx-auto">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
          2026 Tax Deadlines Calendar
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          A month‑by‑month overview of key federal filing and payment dates.
        </p>
      </header>
      <nav className="flex flex-wrap justify-center gap-2 mb-6">
        {monthNames.map((name, idx) => (
          <button
            key={name}
            className={`px-3 py-1 rounded transition font-medium
              ${
                activeMonth === idx
                  ? "bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 shadow"
                  : "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200"
              }
            `}
            onClick={() => setActiveMonth(idx)}
            aria-current={activeMonth === idx ? "page" : undefined}
          >
            {name}
          </button>
        ))}
      </nav>
      <MonthGrid month={activeMonth} year={year} />
    </main>
  );
}
