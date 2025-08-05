"use client";

import {
  computeIncomeTax,
  FilingStatus,
  STANDARD_DEDUCTION,
} from "@/data/tax-center/calculatorData";
import { useState } from "react";

export const IncomeTaxCalculator = () => {
  const [status, setStatus] = useState<FilingStatus>("single");
  const [income, setIncome] = useState<string>("");
  const [tax, setTax] = useState<number | null>(null);
  const [taxableIncome, setTaxableIncome] = useState<number | null>(null);
  const handleCalc = () => {
    const inc = parseFloat(income);
    if (isNaN(inc) || inc < 0) {
      setTax(null);
      setTaxableIncome(null);
      return;
    }
    const deduction = STANDARD_DEDUCTION[status];
    const taxable = Math.max(0, inc - deduction);
    const estimatedTax = computeIncomeTax(taxable, status);
    setTaxableIncome(taxable);
    setTax(estimatedTax);
  };
  return (
    <section className="mb-8 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
        Federal Income Tax Estimator
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
            <option value="single">Single or Married Filing Separately</option>
            <option value="married">Married Filing Jointly</option>
          </select>
        </label>
        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Total income ($)
          </span>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
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
        {tax !== null && (
          <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            <p>
              Standard deduction: ${STANDARD_DEDUCTION[status].toLocaleString()}
            </p>
            <p>Taxable income: ${taxableIncome!.toLocaleString()}</p>
            <p className="font-semibold">
              Estimated federal income tax: $
              {tax!.toLocaleString(undefined, {
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
