interface TaxEvent {
  date: string;
  title: string;
}

// List of important U.S. tax due dates in the 2026 calendar year.  Feel free
// to extend this array with additional deadlines relevant to your practice.
export const taxEvents: TaxEvent[] = [
  {
    date: "2026-01-15",
    title: "Quarter 4 2025 estimated tax payment due", // Q4 2025 estimated tax payment for 2025 income【228261570639735†L205-L212】
  },
  {
    date: "2026-01-27",
    title: "IRS begins accepting 2025 tax returns", // IRS starts processing returns for 2025 tax year【479251696936466†L60-L69】
  },
  {
    date: "2026-01-31",
    title: "Deadline to furnish W‑2 and 1099 forms for 2025", // Employers must send 2025 W‑2/1099 forms【149801898252932†L95-L97】【149801898252932†L110-L112】
  },
  {
    date: "2026-03-16",
    title: "Partnership & S‑Corp returns due (Forms 1065/1120‑S)", // S corporations and partnerships file returns【425030480336365†L181-L210】
  },
  {
    date: "2026-04-15",
    title:
      "Individual return and payment due; C‑Corp & sole proprietorship returns; Q1 2026 estimated tax; Roth IRA deadline", // 1040, 1120 & estimated payments【886859812152496†L232-L239】【228261570639735†L227-L232】【759783219689688†L72-L74】
  },
  {
    date: "2026-06-15",
    title: "Automatic expat extension & Q2 2026 estimated tax payment due", // June 15 automatic extension and estimated tax【886859812152496†L234-L247】【824950382343728†L841-L856】
  },
  {
    date: "2026-09-15",
    title: "Extended S‑Corp/partnership returns; Q3 2026 estimated tax due", // Extended deadline and estimated tax【886859812152496†L241-L247】【425030480336365†L181-L210】
  },
  {
    date: "2026-10-15",
    title: "Extended individual & C‑Corp returns due", // Final extension for individual and corporate returns【886859812152496†L236-L238】【479251696936466†L60-L69】
  },
  {
    date: "2026-12-15",
    title: "Final extension for certain expat returns", // Special final filing deadline【886859812152496†L212-L239】
  },
  {
    date: "2027-01-15",
    title: "Quarter 4 2026 estimated tax payment due", // Final estimated payment for income earned Sept–Dec 2026【824950382343728†L841-L864】
  },
];
