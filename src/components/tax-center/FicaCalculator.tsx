"use client";

import { computeFICAWithholding } from "@/data/tax-center/calculatorData";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

export const FicaCalculator: React.FC = () => {
  const [payFrequency, setPayFrequency] = useState<
    "weekly" | "biweekly" | "semimonthly" | "monthly" | "annual"
  >("biweekly");
  const [grossPay, setGrossPay] = useState<string>("");
  const [yearToDateWages, setYearToDateWages] = useState<string>("");
  const [pre401k, setPre401k] = useState<string>("");
  const [healthInsurance, setHealthInsurance] = useState<string>("");
  const [results, setResults] = useState<{
    periodWages: number;
    annualizedWages: number;
    ficaResult: ReturnType<typeof computeFICAWithholding>;
    netPay: number;
    employerMatch: number;
    totalPayrollTax: number;
    yearEndProjection: number;
    socialSecurityCap: boolean;
  } | null>(null);

  const getPayPeriodsPerYear = (frequency: string): number => {
    switch (frequency) {
      case "weekly":
        return 52;
      case "biweekly":
        return 26;
      case "semimonthly":
        return 24;
      case "monthly":
        return 12;
      case "annual":
        return 1;
      default:
        return 26;
    }
  };

  const handleCalc = () => {
    const gross = parseFloat(grossPay) || 0;
    const ytdWages = parseFloat(yearToDateWages) || 0;
    const retirement = parseFloat(pre401k) || 0;
    const health = parseFloat(healthInsurance) || 0;

    if (gross <= 0) {
      setResults(null);
      return;
    }

    const payPeriods = getPayPeriodsPerYear(payFrequency);

    // Calculate wages subject to FICA (after pre-tax deductions)
    const periodWages = Math.max(0, gross - retirement - health);
    const annualizedWages =
      payFrequency === "annual" ? periodWages : periodWages * payPeriods;

    // Calculate FICA withholding for this pay period
    const ficaResult = computeFICAWithholding(periodWages);

    // Calculate net pay for this period
    const netPay = periodWages - ficaResult.total;

    // Calculate employer matching portion (employer pays same FICA rates)
    const employerMatch = ficaResult.total;

    // Total payroll tax burden (employee + employer)
    const totalPayrollTax = ficaResult.total + employerMatch;

    // Year-end projection based on current wages
    const projectedAnnualWages =
      ytdWages +
      annualizedWages *
        (payFrequency === "annual" ? 1 : (52 - getCurrentWeek()) / 52);

    // Check if approaching Social Security wage base
    const socialSecurityBase = 176100; // 2025 limit
    const socialSecurityCap = ytdWages + annualizedWages > socialSecurityBase;

    setResults({
      periodWages,
      annualizedWages,
      ficaResult,
      netPay,
      employerMatch,
      totalPayrollTax,
      yearEndProjection: projectedAnnualWages,
      socialSecurityCap,
    });
  };

  const getCurrentWeek = (): number => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  };

  const formatFrequencyLabel = (freq: string): string => {
    switch (freq) {
      case "weekly":
        return "Weekly";
      case "biweekly":
        return "Bi-weekly (every 2 weeks)";
      case "semimonthly":
        return "Semi-monthly (twice per month)";
      case "monthly":
        return "Monthly";
      case "annual":
        return "Annual";
      default:
        return freq;
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        FICA Withholding Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Payroll Information
          </h3>

          {/* Pay Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Pay Frequency
            </label>
            <select
              value={payFrequency}
              onChange={(e) =>
                setPayFrequency(
                  e.target.value as
                    | "weekly"
                    | "biweekly"
                    | "semimonthly"
                    | "monthly"
                    | "annual"
                )
              }
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            >
              <option value="weekly">Weekly (52 pay periods)</option>
              <option value="biweekly">Bi-weekly (26 pay periods)</option>
              <option value="semimonthly">Semi-monthly (24 pay periods)</option>
              <option value="monthly">Monthly (12 pay periods)</option>
              <option value="annual">Annual (1 pay period)</option>
            </select>
          </div>

          {/* Gross Pay */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Gross Pay Per {formatFrequencyLabel(payFrequency).split(" ")[0]}{" "}
              Period
            </label>
            <input
              type="number"
              value={grossPay}
              onChange={(e) => setGrossPay(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder={
                payFrequency === "annual" ? "e.g., 75000" : "e.g., 3000"
              }
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Gross wages before any deductions
            </p>
          </div>

          {/* Year-to-Date Wages */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Year-to-Date Gross Wages
            </label>
            <input
              type="number"
              value={yearToDateWages}
              onChange={(e) => setYearToDateWages(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="e.g., 45000"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Total wages earned so far this year (for Social Security cap
              calculation)
            </p>
          </div>

          {/* 401k Contribution */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              401(k) Contribution Per Pay Period
            </label>
            <input
              type="number"
              value={pre401k}
              onChange={(e) => setPre401k(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="e.g., 400"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Pre-tax retirement contributions (reduces FICA wages)
            </p>
          </div>

          {/* Health Insurance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Health Insurance Premium Per Pay Period
            </label>
            <input
              type="number"
              value={healthInsurance}
              onChange={(e) => setHealthInsurance(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              placeholder="e.g., 150"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Pre-tax health insurance premiums (reduces FICA wages)
            </p>
          </div>

          <button
            onClick={handleCalc}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Calculate FICA Withholding
          </button>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            FICA Calculation Results
          </h3>

          {results ? (
            <div className="space-y-4">
              {/* Pay Period Breakdown */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  {formatFrequencyLabel(payFrequency)} Pay Breakdown
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Gross Pay:</span>
                    <span>${parseFloat(grossPay || "0").toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>401(k) Contribution:</span>
                    <span>-${parseFloat(pre401k || "0").toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Health Insurance:</span>
                    <span>
                      -${parseFloat(healthInsurance || "0").toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between font-medium border-t pt-2">
                    <span>FICA Taxable Wages:</span>
                    <span>${results.periodWages.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* FICA Withholding */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Employee FICA Withholding
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Social Security Tax (6.2%):</span>
                    <span>${results.ficaResult.ssTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medicare Tax (1.45%):</span>
                    <span>
                      ${results.ficaResult.medicareTax.toLocaleString()}
                    </span>
                  </div>
                  {results.ficaResult.addMedTax > 0 && (
                    <div className="flex justify-between">
                      <span>Additional Medicare Tax (0.9%):</span>
                      <span>
                        ${results.ficaResult.addMedTax.toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-medium border-t pt-2">
                    <span>Total Employee FICA:</span>
                    <span>${results.ficaResult.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Employer Matching */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Employer Portion
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Employer FICA Match:</span>
                    <span>${results.employerMatch.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-medium border-t pt-2">
                    <span>Total Payroll Tax (Employee + Employer):</span>
                    <span>${results.totalPayrollTax.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Net Pay */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Take-Home Pay
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>FICA Taxable Wages:</span>
                    <span>${results.periodWages.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>FICA Withholding:</span>
                    <span>-${results.ficaResult.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg border-t pt-2">
                    <span>Net Pay (before income tax):</span>
                    <span className="text-green-600 dark:text-green-400">
                      ${results.netPay.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Annual Projections */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Annual Projections
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annualized Wages:</span>
                    <span>${results.annualizedWages.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual FICA (Employee):</span>
                    <span>
                      $
                      {(
                        results.ficaResult.total *
                        getPayPeriodsPerYear(payFrequency)
                      ).toLocaleString()}
                    </span>
                  </div>
                  {results.socialSecurityCap && (
                    <div className="text-amber-600 dark:text-amber-400 text-xs border-t pt-2">
                      ⚠️ May exceed Social Security wage base ($176,100)
                    </div>
                  )}
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <HiInformationCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-amber-800 dark:text-amber-200">
                    <p className="font-medium mb-1">Important FICA Notes:</p>
                    <ul className="space-y-1 text-xs">
                      <li>
                        • Social Security tax stops at $176,100 wage base for
                        2025
                      </li>
                      <li>• Medicare tax continues on all wages with no cap</li>
                      <li>
                        • Additional 0.9% Medicare tax applies above $200,000
                      </li>
                      <li>
                        • Pre-tax deductions (401k, health insurance) reduce
                        FICA wages
                      </li>
                      <li>• Employer pays matching FICA taxes</li>
                      <li>
                        • This does not include federal/state income tax
                        withholding
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tax Planning Tip */}
              <div className="bg-sky-50 dark:bg-sky-900/20 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  💡 Tax Planning Tip
                </h4>
                <p className="text-sm text-sky-800 dark:text-sky-200">
                  Maximize pre-tax deductions (401k, health insurance, HSA) to
                  reduce your FICA tax burden. Consider consulting a CPA for
                  comprehensive payroll tax planning strategies.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <p>
                Enter your payroll information and click &quot;Calculate FICA
                Withholding&quot; to see your estimated payroll tax deductions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
