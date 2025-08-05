"use client";

import { CalcButton } from "@/components/tax-center/CalcButton";
import { FicaCalculator } from "@/components/tax-center/FicaCalculator";
import { IncomeTaxCalculator } from "@/components/tax-center/IncomeTaxCalculator";
import { SelfEmploymentCalculator } from "@/components/tax-center/SelfEmploymentCalculator";
import { useState } from "react";

export default function CalculatorsPage() {
  const [activeCalc, setActiveCalc] = useState<"income" | "self" | "fica">(
    "income"
  );

  return (
    <main className="px-4 py-8 max-w-5xl mx-auto">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
          Tax Calculators
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Estimate your taxes with these simple tools.
        </p>
      </header>
      <nav className="flex flex-wrap justify-center gap-2 mb-6">
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
      {activeCalc === "income" && <IncomeTaxCalculator />}
      {activeCalc === "self" && <SelfEmploymentCalculator />}
      {activeCalc === "fica" && <FicaCalculator />}
    </main>
  );
}

// Component for the payroll FICA withholding calculator.
