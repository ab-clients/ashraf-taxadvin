interface TaxEvent {
  date: string;
  title: string;
}

export const taxEvents: TaxEvent[] = [
  { date: "2026-01-15", title: "Q4 2025 Est. Tax Due" },
  { date: "2026-01-27", title: "IRS E-File Opens" },
  { date: "2026-01-31", title: "W-2/1099s Due" },
  { date: "2026-03-16", title: "S-Corp/Partnership Due" },
  { date: "2026-04-15", title: "Tax Day (1040, C-Corp)" },
  { date: "2026-06-15", title: "Expat & Q2 Est. Due" },
  { date: "2026-09-15", title: "Ext. S-Corp/Partnership, Q3 Est." },
  { date: "2026-10-15", title: "1040/C-Corp Extension Due" },
  { date: "2026-12-15", title: "Final Expat Ext. Due" },
  { date: "2027-01-15", title: "Q4 2026 Est. Tax Due" },
];
