"use client";

import { CalcButton } from "@/components/tax-center/CalcButton";
import { FicaCalculator } from "@/components/tax-center/FicaCalculator";
import { IncomeTaxCalculator } from "@/components/tax-center/IncomeTaxCalculator";
import { SelfEmploymentCalculator } from "@/components/tax-center/SelfEmploymentCalculator";
import { useState } from "react";
import { HiCalculator, HiLightningBolt, HiShieldCheck } from "react-icons/hi";

export default function CalculatorsPage() {
  const [activeCalc, setActiveCalc] = useState<"income" | "self" | "fica">(
    "income"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 dark:bg-sky-900 rounded-2xl mb-6">
            <HiCalculator className="w-8 h-8 text-sky-600 dark:text-sky-400" />
          </div>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Tax Calculators
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Get instant tax estimates with our professional-grade calculators.
            Quick, accurate, and completely free.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <HiLightningBolt className="w-4 h-4 text-sky-500" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <HiShieldCheck className="w-4 h-4 text-sky-500" />
              <span>CPA Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCalculator className="w-4 h-4 text-sky-500" />
              <span>Always Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <main className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Calculator Navigation */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-2 mb-8">
            <nav className="flex flex-wrap justify-between gap-2">
              <CalcButton
                label="Income Tax"
                active={activeCalc === "income"}
                onClick={() => setActiveCalc("income")}
              />
              <CalcButton
                label="Self‑Employment Tax"
                active={activeCalc === "self"}
                onClick={() => setActiveCalc("self")}
              />
              <CalcButton
                label="FICA Withholding"
                active={activeCalc === "fica"}
                onClick={() => setActiveCalc("fica")}
              />
            </nav>
          </div>

          {/* Calculator Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {activeCalc === "income" && <IncomeTaxCalculator />}
            {activeCalc === "self" && <SelfEmploymentCalculator />}
            {activeCalc === "fica" && <FicaCalculator />}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Need Professional Tax Planning?
              </h3>
              <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
                These calculators provide estimates. For comprehensive tax
                planning and optimization, schedule a consultation with our
                licensed CPAs.
              </p>
              <a
                href="/book-appointment"
                className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-8 py-4 rounded-xl hover:bg-sky-50 transition-colors duration-300 shadow-lg"
              >
                <HiCalculator className="w-5 h-5" />
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Component for the payroll FICA withholding calculator.
