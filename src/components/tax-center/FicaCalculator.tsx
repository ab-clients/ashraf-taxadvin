"use client";

import { computeFICAWithholding } from "@/data/tax-center/calculatorData";
import { useState } from "react";

export const FicaCalculator: React.FC = () => {
  const [wages, setWages] = useState<string>("");
  const [result, setResult] = useState<ReturnType<
    typeof computeFICAWithholding
  > | null>(null);
  const handleCalc = () => {
    const w = parseFloat(wages);
    if (isNaN(w) || w < 0) {
      setResult(null);
      return;
    }
    const res = computeFICAWithholding(w);
    setResult(res);
  };
  return (
    <section className="mb-8 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
        Payroll FICA Withholding Calculator
      </h2>
      <div className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Gross wages ($)
          </span>
          <input
            type="number"
            value={wages}
            onChange={(e) => setWages(e.target.value)}
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
              Social Security tax (6.2%): $
              {result.ssTax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p>
              Medicare tax (1.45%): $
              {result.medicareTax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            {result.addMedTax > 0 && (
              <p>
                Additional Medicare tax (0.9% over $200,000): $
                {result.addMedTax.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            )}
            <p className="font-semibold">
              Total FICA withholding: $
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
