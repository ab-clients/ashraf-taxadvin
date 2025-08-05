// Filing statuses supported by the calculators
export type FilingStatus = "single" | "married" | "married_separate";

// Tax bracket definition for a single rate tier.  threshold denotes the lower
// bound of the bracket; rate is the marginal rate expressed as a decimal.
export interface Bracket {
  threshold: number;
  rate: number;
}

// Federal income tax brackets for tax year 2025.  These arrays are sorted by
// ascending threshold.  Each entry marks the starting income for that rate.
export const INCOME_TAX_BRACKETS: Record<string, Bracket[]> = {
  single: [
    { threshold: 0, rate: 0.1 }, // 0 – 11,925
    { threshold: 11_925, rate: 0.12 }, // 11,925 – 48,475
    { threshold: 48_475, rate: 0.22 }, // 48,475 – 103,350
    { threshold: 103_350, rate: 0.24 }, // 103,350 – 197,300
    { threshold: 197_300, rate: 0.32 }, // 197,300 – 250,525
    { threshold: 250_525, rate: 0.35 }, // 250,525 – 626,350
    { threshold: 626_350, rate: 0.37 }, // 626,350 and above
  ],
  married: [
    { threshold: 0, rate: 0.1 }, // 0 – 23,850
    { threshold: 23_850, rate: 0.12 }, // 23,850 – 96,950
    { threshold: 96_950, rate: 0.22 }, // 96,950 – 206,700
    { threshold: 206_700, rate: 0.24 }, // 206,700 – 394,600
    { threshold: 394_600, rate: 0.32 }, // 394,600 – 501,050
    { threshold: 501_050, rate: 0.35 }, // 501,050 – 751,600
    { threshold: 751_600, rate: 0.37 }, // 751,600 and above
  ],
};

// Standard deduction amounts for tax year 2025.  These values come from
// IRS inflation adjustments【669650372048853†L310-L317】.
export const STANDARD_DEDUCTION: Record<string, number> = {
  single: 15_000,
  married: 30_000,
  married_separate: 15_000,
};

// Additional Medicare tax thresholds for different filing statuses【992937634582960†L345-L354】.
export const ADDITIONAL_MEDICARE_THRESHOLDS: Record<FilingStatus, number> = {
  single: 200_000,
  married: 250_000,
  married_separate: 125_000,
};

// Function to compute federal income tax given taxable income and filing status.
export function computeIncomeTax(
  taxableIncome: number,
  status: FilingStatus
): number {
  const brackets =
    INCOME_TAX_BRACKETS[status === "married_separate" ? "single" : status];
  let tax = 0;
  // Iterate through brackets from the highest threshold down to accumulate tax.
  for (let i = brackets.length - 1; i >= 0; i--) {
    const { threshold, rate } = brackets[i];
    if (taxableIncome > threshold) {
      tax += (taxableIncome - threshold) * rate;
      taxableIncome = threshold;
    }
  }
  return tax;
}

// Compute self‑employment tax.  Uses 92.35% of net earnings【355645795462530†L304-L310】, a 12.4% Social
// Security rate and 2.9% Medicare rate【355645795462530†L338-L340】, and applies the Social
// Security wage base limit (2025 limit of $176,100【340722181181596†L322-L327】).  Additional
// Medicare tax of 0.9% applies above the threshold for your filing status【992937634582960†L345-L354】.
export function computeSelfEmploymentTax(
  netIncome: number,
  status: FilingStatus
) {
  const taxableEarnings = netIncome * 0.9235;
  const socialSecurityBase = 176_100;
  const socialSecurityRate = 0.124; // 12.4%
  const medicareRate = 0.029; // 2.9%
  const additionalMedicareRate = 0.009; // 0.9%
  const ssTaxable = Math.min(taxableEarnings, socialSecurityBase);
  const socialSecurityTax = ssTaxable * socialSecurityRate;
  const medicareTax = taxableEarnings * medicareRate;
  // Additional Medicare tax threshold
  const threshold = ADDITIONAL_MEDICARE_THRESHOLDS[status];
  const addMedTax =
    taxableEarnings > threshold
      ? (taxableEarnings - threshold) * additionalMedicareRate
      : 0;
  const total = socialSecurityTax + medicareTax + addMedTax;
  return { taxableEarnings, socialSecurityTax, medicareTax, addMedTax, total };
}

// Compute FICA (employee) payroll withholding.  Social Security rate 6.2% and
// Medicare 1.45%【340722181181596†L302-L306】; Social Security wage base limit $176,100【340722181181596†L322-L327】.
export function computeFICAWithholding(wages: number) {
  const ssRate = 0.062;
  const medicareRate = 0.0145;
  const socialSecurityBase = 176_100;
  const additionalMedicareRate = 0.009;
  const ssTax = Math.min(wages, socialSecurityBase) * ssRate;
  const medicareTax = wages * medicareRate;
  const addMedTax =
    wages > 200_000 ? (wages - 200_000) * additionalMedicareRate : 0;
  const total = ssTax + medicareTax + addMedTax;
  return { ssTax, medicareTax, addMedTax, total };
}
