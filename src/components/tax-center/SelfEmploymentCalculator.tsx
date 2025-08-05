"use client";

import {
  computeSelfEmploymentTax,
  FilingStatus,
} from "@/data/tax-center/calculatorData";
import { useState } from "react";

export const SelfEmploymentCalculator = () => {
  const [status, setStatus] = useState<FilingStatus>("single");
  const [netIncome, setNetIncome] = useState<string>("");
  const [result, setResult] = useState<ReturnType<
    typeof computeSelfEmploymentTax
  > | null>(null);
  const handleCalc = () => {
    const inc = parseFloat(netIncome);
    if (isNaN(inc) || inc < 0) {
      setResult(null);
      return;
    }
    const res = computeSelfEmploymentTax(inc, status);
    setResult(res);
  };
  return (
    <section className="mb-8 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
        Self‑Employment Tax Calculator
      </h2>
      <div className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Filing status
          </span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as FilingStatus)}
            className="p-2 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
          >
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
            <option value="married_separate">Married Filing Separately</option>
          </select>
        </label>
        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Net earnings from self‑employment ($)
          </span>
          <input
            type="number"
            value={netIncome}
            onChange={(e) => setNetIncome(e.target.value)}
            className="p-2 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
            placeholder="0"
          />
        </label>
        <button
          onClick={handleCalc}
          className="self-start px-4 py-2 mt-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-400 dark:hover:bg-blue-500 dark:text-gray-900 transition"
        >
          Calculate
        </button>
        {result && (
          <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <p>
              Taxable earnings (92.35% of net income): $
              {result.taxableEarnings.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p>
              Social Security tax (12.4% up to base): $
              {result.socialSecurityTax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p>
              Medicare tax (2.9%): $
              {result.medicareTax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            {result.addMedTax > 0 && (
              <p>
                Additional Medicare tax (0.9% over threshold): $
                {result.addMedTax.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            )}
            <p className="font-semibold">
              Total self‑employment tax: $
              {result.total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
