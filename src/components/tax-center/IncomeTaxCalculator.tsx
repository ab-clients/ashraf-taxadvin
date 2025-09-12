"use client";

import {
  computeIncomeTax,
  FilingStatus,
  STANDARD_DEDUCTION,
} from "@/data/tax-center/calculatorData";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

export const IncomeTaxCalculator = () => {
  const [status, setStatus] = useState<FilingStatus>("single");
  const [income, setIncome] = useState<string>("");
  const [dependents, setDependents] = useState<string>("0");
  const [currentWithholding, setCurrentWithholding] = useState<string>("");
  const [deductionType, setDeductionType] = useState<"standard" | "itemized">(
    "standard"
  );
  const [itemizedDeductions, setItemizedDeductions] = useState<string>("");
  const [pre401k, setPre401k] = useState<string>("");
  const [results, setResults] = useState<{
    adjustedGrossIncome: number;
    taxableIncome: number;
    federalTax: number;
    effectiveRate: number;
    marginalRate: number;
    refundOrOwed: number;
    childTaxCredit: number;
    totalDeductions: number;
  } | null>(null);

  const handleCalc = () => {
    const grossIncome = parseFloat(income) || 0;
    const numDependents = parseInt(dependents) || 0;
    const withheld = parseFloat(currentWithholding) || 0;
    const retirement401k = parseFloat(pre401k) || 0;
    const itemized = parseFloat(itemizedDeductions) || 0;

    if (grossIncome <= 0) {
      setResults(null);
      return;
    }

    // Calculate AGI (after 401k contributions)
    const adjustedGrossIncome = Math.max(0, grossIncome - retirement401k);

    // Determine deductions
    const standardDeduction = STANDARD_DEDUCTION[status];
    const totalDeductions =
      deductionType === "standard"
        ? standardDeduction
        : Math.max(itemized, standardDeduction); // Use higher of standard or itemized

    // Calculate taxable income
    const taxableIncome = Math.max(0, adjustedGrossIncome - totalDeductions);

    // Calculate federal tax
    const federalTax = computeIncomeTax(taxableIncome, status);

    // Child Tax Credit (simplified - $2,000 per qualifying child under 17)
    // Phase out begins at $200k (single) or $400k (married)
    const phaseOutThreshold = status === "married" ? 400000 : 200000;
    let childTaxCredit = 0;
    if (adjustedGrossIncome <= phaseOutThreshold) {
      childTaxCredit = numDependents * 2000;
    } else {
      // Simplified phase-out calculation
      const excess = adjustedGrossIncome - phaseOutThreshold;
      const reduction = Math.floor(excess / 1000) * 50;
      childTaxCredit = Math.max(0, numDependents * 2000 - reduction);
    }

    // Final tax after credits
    const taxAfterCredits = Math.max(0, federalTax - childTaxCredit);

    // Calculate rates
    const effectiveRate =
      adjustedGrossIncome > 0
        ? (taxAfterCredits / adjustedGrossIncome) * 100
        : 0;

    // Simple marginal rate calculation
    const marginalRate = getMarginalRate(taxableIncome, status);

    // Refund or amount owed
    const refundOrOwed = withheld - taxAfterCredits;

    setResults({
      adjustedGrossIncome,
      taxableIncome,
      federalTax: taxAfterCredits,
      effectiveRate,
      marginalRate,
      refundOrOwed,
      childTaxCredit,
      totalDeductions,
    });
  };

  const getMarginalRate = (
    taxableIncome: number,
    status: FilingStatus
  ): number => {
    const brackets = {
      single: [
        { min: 0, rate: 10 },
        { min: 11925, rate: 12 },
        { min: 48475, rate: 22 },
        { min: 103350, rate: 24 },
        { min: 197300, rate: 32 },
        { min: 250525, rate: 35 },
        { min: 626350, rate: 37 },
      ],
      married: [
        { min: 0, rate: 10 },
        { min: 23850, rate: 12 },
        { min: 96950, rate: 22 },
        { min: 206700, rate: 24 },
        { min: 394600, rate: 32 },
        { min: 501050, rate: 35 },
        { min: 751600, rate: 37 },
      ],
    };

    const applicableBrackets =
      brackets[status === "married_separate" ? "single" : status];
    for (let i = applicableBrackets.length - 1; i >= 0; i--) {
      if (taxableIncome >= applicableBrackets[i].min) {
        return applicableBrackets[i].rate;
      }
    }
    return 10;
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Federal Income Tax Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Tax Information
          </h3>

          {/* Filing Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Filing Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as FilingStatus)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            >
              <option value="single">Single</option>
              <option value="married">Married Filing Jointly</option>
              <option value="married_separate">
                Married Filing Separately
              </option>
            </select>
          </div>

          {/* Annual Income */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Annual Gross Income
            </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="e.g., 75000"
            />
          </div>

          {/* 401k Contributions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              401(k) / Retirement Contributions
            </label>
            <input
              type="number"
              value={pre401k}
              onChange={(e) => setPre401k(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="e.g., 6000"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Pre-tax contributions (2025 limit: $23,500)
            </p>
          </div>

          {/* Dependents */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Qualifying Children (under 17)
            </label>
            <input
              type="number"
              value={dependents}
              onChange={(e) => setDependents(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="0"
              min="0"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Eligible for $2,000 Child Tax Credit each
            </p>
          </div>

          {/* Deduction Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Deduction Type
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="standard"
                  checked={deductionType === "standard"}
                  onChange={(e) =>
                    setDeductionType(e.target.value as "standard" | "itemized")
                  }
                  className="mr-2 text-sky-600 focus:ring-sky-500"
                />
                <span className="text-sm">
                  Standard Deduction ($
                  {STANDARD_DEDUCTION[status].toLocaleString()})
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="itemized"
                  checked={deductionType === "itemized"}
                  onChange={(e) =>
                    setDeductionType(e.target.value as "standard" | "itemized")
                  }
                  className="mr-2 text-sky-600 focus:ring-sky-500"
                />
                <span className="text-sm">Itemized Deductions</span>
              </label>
            </div>
          </div>

          {/* Itemized Deductions */}
          {deductionType === "itemized" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Total Itemized Deductions
              </label>
              <input
                type="number"
                value={itemizedDeductions}
                onChange={(e) => setItemizedDeductions(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="e.g., 18000"
              />
            </div>
          )}

          {/* Current Tax Withholding */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Federal Tax Already Withheld/Paid
            </label>
            <input
              type="number"
              value={currentWithholding}
              onChange={(e) => setCurrentWithholding(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="e.g., 8500"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Check your last paystub or previous year&apos;s return
            </p>
          </div>

          <button
            onClick={handleCalc}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Calculate Tax
          </button>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Tax Calculation Results
          </h3>

          {results ? (
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Income Breakdown
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Gross Income:</span>
                    <span>${parseFloat(income || "0").toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>401(k) Contributions:</span>
                    <span>-${parseFloat(pre401k || "0").toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Adjusted Gross Income:</span>
                    <span>${results.adjustedGrossIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deductions:</span>
                    <span>-${results.totalDeductions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-medium border-t pt-2">
                    <span>Taxable Income:</span>
                    <span>${results.taxableIncome.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Tax Calculation
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Federal Income Tax:</span>
                    <span>
                      $
                      {(
                        results.federalTax + results.childTaxCredit
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Child Tax Credit:</span>
                    <span>-${results.childTaxCredit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-medium border-t pt-2">
                    <span>Total Tax Owed:</span>
                    <span>${results.federalTax.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Tax Rates
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Effective Tax Rate:</span>
                    <span>{results.effectiveRate.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marginal Tax Rate:</span>
                    <span>{results.marginalRate}%</span>
                  </div>
                </div>
              </div>

              {currentWithholding && (
                <div
                  className={`rounded-lg p-4 ${results.refundOrOwed >= 0 ? "bg-green-50 dark:bg-green-900/20" : "bg-red-50 dark:bg-red-900/20"}`}
                >
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {results.refundOrOwed >= 0
                      ? "Estimated Refund"
                      : "Additional Tax Owed"}
                  </h4>
                  <div
                    className={`text-2xl font-bold ${results.refundOrOwed >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                  >
                    ${Math.abs(results.refundOrOwed).toLocaleString()}
                  </div>
                </div>
              )}

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <HiInformationCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <p className="font-medium mb-1">Important Notes:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• This is an estimate for federal taxes only</li>
                      <li>• State taxes are not included</li>
                      <li>
                        • Actual results may vary based on additional factors
                      </li>
                      <li>
                        • Consider consulting a CPA for comprehensive tax
                        planning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <p>
                Enter your information and click &quot;Calculate Tax&quot; to
                see your estimated federal tax liability.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
