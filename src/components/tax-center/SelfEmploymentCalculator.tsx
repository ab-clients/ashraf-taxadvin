"use client";

import {
  computeSelfEmploymentTax,
  FilingStatus,
} from "@/data/tax-center/calculatorData";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

export const SelfEmploymentCalculator = () => {
  const [status, setStatus] = useState<FilingStatus>("single");
  const [grossRevenue, setGrossRevenue] = useState<string>("");
  const [businessExpenses, setBusinessExpenses] = useState<string>("");
  const [estimatedTaxPayments, setEstimatedTaxPayments] = useState<string>("");
  const [quarterlyFrequency, setQuarterlyFrequency] = useState<
    "quarterly" | "annual"
  >("quarterly");
  const [results, setResults] = useState<{
    netIncome: number;
    selfEmploymentTax: ReturnType<typeof computeSelfEmploymentTax>;
    quarterlyPayment: number;
    deductiblePortion: number;
    effectiveRate: number;
    remainingPayments: number;
  } | null>(null);

  const handleCalc = () => {
    const revenue = parseFloat(grossRevenue) || 0;
    const expenses = parseFloat(businessExpenses) || 0;
    const paidTaxes = parseFloat(estimatedTaxPayments) || 0;

    if (revenue <= 0) {
      setResults(null);
      return;
    }

    // Calculate net self-employment income
    const netIncome = Math.max(0, revenue - expenses);

    // Calculate self-employment tax
    const selfEmploymentTax = computeSelfEmploymentTax(netIncome, status);

    // Calculate deductible portion (employer equivalent portion)
    const deductiblePortion = selfEmploymentTax.total * 0.5;

    // Calculate effective self-employment tax rate
    const effectiveRate =
      netIncome > 0 ? (selfEmploymentTax.total / netIncome) * 100 : 0;

    // Calculate quarterly payment suggestions
    const annualSETax = selfEmploymentTax.total;
    const quarterlyPayment =
      quarterlyFrequency === "quarterly" ? annualSETax / 4 : annualSETax;

    // Calculate remaining payments needed
    const remainingPayments = Math.max(0, annualSETax - paidTaxes);

    setResults({
      netIncome,
      selfEmploymentTax,
      quarterlyPayment,
      deductiblePortion,
      effectiveRate,
      remainingPayments,
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Self-Employment Tax Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Business Information
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

          {/* Gross Revenue */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Annual Gross Revenue/Income
            </label>
            <input
              type="number"
              value={grossRevenue}
              onChange={(e) => setGrossRevenue(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="e.g., 120000"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Total income from self-employment activities
            </p>
          </div>

          {/* Business Expenses */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Annual Business Expenses
            </label>
            <input
              type="number"
              value={businessExpenses}
              onChange={(e) => setBusinessExpenses(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="e.g., 25000"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Deductible business expenses (office, supplies, travel, etc.)
            </p>
          </div>

          {/* Estimated Tax Payments Already Made */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Self-Employment Tax Already Paid This Year
            </label>
            <input
              type="number"
              value={estimatedTaxPayments}
              onChange={(e) => setEstimatedTaxPayments(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="e.g., 8000"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Include quarterly estimated payments made to IRS
            </p>
          </div>

          {/* Payment Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Payment Planning
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="quarterly"
                  checked={quarterlyFrequency === "quarterly"}
                  onChange={(e) =>
                    setQuarterlyFrequency(
                      e.target.value as "quarterly" | "annual"
                    )
                  }
                  className="mr-2 text-sky-600 focus:ring-sky-500"
                />
                <span className="text-sm">Quarterly Estimated Payments</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="annual"
                  checked={quarterlyFrequency === "annual"}
                  onChange={(e) =>
                    setQuarterlyFrequency(
                      e.target.value as "quarterly" | "annual"
                    )
                  }
                  className="mr-2 text-sky-600 focus:ring-sky-500"
                />
                <span className="text-sm">Annual Payment with Tax Return</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleCalc}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Calculate Self-Employment Tax
          </button>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Tax Calculation Results
          </h3>

          {results ? (
            <div className="space-y-4">
              {/* Business Profit */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Business Profit
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Gross Revenue:</span>
                    <span>
                      ${parseFloat(grossRevenue || "0").toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Business Expenses:</span>
                    <span>
                      -${parseFloat(businessExpenses || "0").toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between font-medium border-t pt-2">
                    <span>Net Self-Employment Income:</span>
                    <span>${results.netIncome.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Self-Employment Tax Breakdown */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Self-Employment Tax Breakdown
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Taxable Earnings (92.35%):</span>
                    <span>
                      $
                      {results.selfEmploymentTax.taxableEarnings.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Social Security Tax (12.4%):</span>
                    <span>
                      $
                      {results.selfEmploymentTax.socialSecurityTax.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medicare Tax (2.9%):</span>
                    <span>
                      ${results.selfEmploymentTax.medicareTax.toLocaleString()}
                    </span>
                  </div>
                  {results.selfEmploymentTax.addMedTax > 0 && (
                    <div className="flex justify-between">
                      <span>Additional Medicare Tax (0.9%):</span>
                      <span>
                        ${results.selfEmploymentTax.addMedTax.toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-medium border-t pt-2">
                    <span>Total Self-Employment Tax:</span>
                    <span>
                      ${results.selfEmploymentTax.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tax Benefits */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Tax Benefits
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Deductible SE Tax (50%):</span>
                    <span className="text-green-600 dark:text-green-400">
                      -${results.deductiblePortion.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Effective SE Tax Rate:</span>
                    <span>{results.effectiveRate.toFixed(2)}%</span>
                  </div>
                </div>
              </div>

              {/* Payment Planning */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Payment Planning
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>
                      {quarterlyFrequency === "quarterly"
                        ? "Quarterly Payment:"
                        : "Annual Payment:"}
                    </span>
                    <span className="font-medium">
                      ${results.quarterlyPayment.toLocaleString()}
                    </span>
                  </div>
                  {estimatedTaxPayments && (
                    <div className="flex justify-between">
                      <span>Already Paid:</span>
                      <span>
                        ${parseFloat(estimatedTaxPayments).toLocaleString()}
                      </span>
                    </div>
                  )}
                  {estimatedTaxPayments && (
                    <div
                      className={`flex justify-between font-medium border-t pt-2 ${
                        results.remainingPayments > 0
                          ? "text-red-600 dark:text-red-400"
                          : "text-green-600 dark:text-green-400"
                      }`}
                    >
                      <span>
                        {results.remainingPayments > 0
                          ? "Additional Payment Needed:"
                          : "Overpaid Amount:"}
                      </span>
                      <span>
                        ${Math.abs(results.remainingPayments).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <HiInformationCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-amber-800 dark:text-amber-200">
                    <p className="font-medium mb-1">
                      Important Self-Employment Tax Notes:
                    </p>
                    <ul className="space-y-1 text-xs">
                      <li>
                        • Self-employment tax is required if net earnings ≥ $400
                      </li>
                      <li>
                        • You can deduct 50% of SE tax on your income tax return
                      </li>
                      <li>
                        • Quarterly estimated payments may be required if you
                        owe ≥ $1,000
                      </li>
                      <li>• Social Security tax caps at $176,100 for 2025</li>
                      <li>
                        • Consider setting aside 25-30% of net income for all
                        taxes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Dates */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  2025 Quarterly Due Dates
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>Q1: April 15, 2025</div>
                  <div>Q2: June 16, 2025</div>
                  <div>Q3: September 15, 2025</div>
                  <div>Q4: January 15, 2026</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <p>
                Enter your business information and click &quot;Calculate
                Self-Employment Tax&quot; to see your estimated tax liability.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
