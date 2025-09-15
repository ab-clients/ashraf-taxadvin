// servicesData.ts

import { ServiceDetail } from "@/types/internal/services/services";
import {
  HiDocumentText,
  HiBookOpen,
  HiCreditCard,
  HiHeart,
  HiChartBar,
  HiCollection,
  HiShieldCheck,
  HiChartPie,
  HiOfficeBuilding,
  HiGlobeAlt,
  HiUserGroup,
  HiCalculator,
  HiFolder,
  HiSupport,
} from "react-icons/hi";

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "virtual-cfo-financial-leadership",
    title: "Fractional / Virtual CFO & Strategic Financial Leadership",
    icon: HiChartPie,
    description:
      "CFO-level guidance without the full-time cost—financial department supervision, KPI discipline, and operational streamlining that drive tax savings and profit.",
    showOnHomePage: false,
    track: "business",
    sections: [
      {
        heading: "Strategic Financial Oversight",
        body: "Fractional CFO leadership integrates planning, controls, and tax strategy—keeping your financial cycle compliant and efficient.",
      },
      {
        heading: "Rolling Cash Flow & Scenario Models",
        body: "Forward-looking models and dashboards inform pricing, hiring, inventory, and financing decisions.",
      },
      {
        heading: "KPI & Profitability Analysis",
        body: "Track margins, unit economics, and pricing effectiveness—then act on what moves profit.",
      },
      {
        heading: "Capital & ERP Planning Support",
        body: "We support fundraising readiness, debt strategy, and system implementations (ERP/billing) tied to measurable ROI.",
      },
      {
        heading: "Enterprise-Level Value, Fractional Cost",
        body: "Get executive-grade clarity and roadmaps—minus the salary, benefits, and management overhead.",
      },
    ],
  },
  {
    slug: "entity-formation-structuring",
    title: "Entity Formation & Tax Structuring",
    icon: HiOfficeBuilding,
    description:
      "Choose and set up the right structure (LLC, S-Corp, C-Corp, partnership) for liability protection, operational streamlining, and long-term tax savings.",
    showOnHomePage: false,
    track: "business",
    sections: [
      {
        heading: "Legal & Tax Structure Advice",
        body: "Structure choices affect liability, taxes, capital, and exit. We map options to goals—then execute.",
      },
      {
        heading: "Formation & Compliance Filing",
        body: "Articles/Operating Agreements, EINs, registrations, BOI filings, and annual reports handled end-to-end.",
      },
      {
        heading: "Ownership & Governance Setup",
        body: "Vesting, buy-sell, and shareholder agreements designed for clarity and future funding.",
      },
      {
        heading: "Multi-State Presence Planning",
        body: "Nexus analysis and registrations to minimize complexity and exposure across states.",
      },
      {
        heading: "One-Sheet Tax Impact Summary",
        body: "Every engagement ends with a one-page tax impact and governance roadmap you can reference year-round.",
      },
    ],
  },
  {
    slug: "international-tax-compliance-planning",
    title: "International Tax Compliance & Planning",
    icon: HiGlobeAlt,
    description:
      "Cross-border done right: FBAR/FinCEN, foreign credits, treaty analysis, transfer pricing—reduce global exposure and avoid penalties.",
    showOnHomePage: false,
    track: "business",
    sections: [
      {
        heading: "Cross-Border Tax Advisory",
        body: "Inbound/outbound investments, global transactions, and distributed teams planned for compliance and efficiency.",
      },
      {
        heading: "FBAR & Foreign Income Reporting",
        body: "FBAR, FinCEN, foreign returns, and asset tracking—filed accurately to avoid penalties.",
      },
      {
        heading: "Foreign Tax Credit Optimization",
        body: "Leverage credits, withholding planning, and treaty provisions to prevent double taxation.",
      },
      {
        heading: "Entity Structuring & Treaty Analysis",
        body: "We structure entities and apply treaty rules to legally minimize taxes on cross-border flows.",
      },
      {
        heading: "Global Compliance for U.S. Taxpayers",
        body: "Offshore trusts, crypto, real estate, and estate planning for U.S. taxpayers with worldwide assets.",
      },
    ],
  },
  {
    slug: "succession-exit-strategic-planning",
    title: "Succession Planning & M&A Advisory",
    icon: HiUserGroup,
    description:
      "Plan exits, partner transitions, and sales that preserve value and optimize after-tax proceeds.",
    showOnHomePage: false,
    track: "business",
    sections: [
      {
        heading: "Exit & Transition Planning",
        body: "Third-party sale, family transfer, or leadership change—structured for clarity and tax efficiency.",
      },
      {
        heading: "Valuation & Deal Structuring",
        body: "Valuations, buy-sell agreements, and deal terms engineered to maximize net proceeds.",
      },
      {
        heading: "M&A & Transaction Advisory",
        body: "Due diligence, QoE, negotiation support, and post-close integration for smooth, value-preserving outcomes.",
      },
      {
        heading: "Ownership Continuity Governance",
        body: "Governance that reduces disputes and safeguards continuity across stakeholders.",
      },
      {
        heading: "Legacy & Financial Continuity",
        body: "A transition that reflects your vision—financially sound, tax-aware, and execution-ready.",
      },
    ],
  },
  {
    slug: "tax-preparation-planning",
    title: "Tax Return Preparation & Strategic Planning",
    icon: HiDocumentText,
    description:
      "Complete tax return preparation combined with proactive planning strategies. We ensure accurate filings while maximizing deductions and credits to drive measurable tax savings year-round.",
    showOnHomePage: true,
    track: "individual",
    sections: [
      {
        heading: "Proactive Tax Planning",
        body: "We plan early so you keep more: timing income, accelerating deductions, and surfacing credits before year-end—reducing your tax bill and improving after-tax cash flow.",
      },
      {
        heading: "Strategic Tax Optimization",
        body: "Beyond filing, we review entity structure, retirement strategies, and specialized credits (R&D, WOTC, capital equipment) to engineer legal, durable tax savings.",
      },
      {
        heading: "Complete Tax Return Preparation",
        body: "Professional preparation of individual tax returns with meticulous attention to detail, ensuring accurate filings and maximum refunds while identifying all available deductions and credits.",
      },
      {
        heading: "Support for Individuals and Businesses",
        body: "Individuals get maximum refunds with clear explanations. Businesses receive quarterly reviews, planning sessions, and guidance tailored to LLCs, corporations, and partnerships.",
      },
      {
        heading: "Year-Round Advantage",
        body: "You get a responsive professional who listens, explains, and stays engaged—turning tax season into a calm, year-round advantage focused on tax savings.",
      },
    ],
  },
  {
    slug: "bookkeeping-quickbooks",
    title: "Bookkeeping & QuickBooks (Built for Tax Savings)",
    icon: HiBookOpen,
    description:
      "Meticulous books are the engine of tax savings. We categorize transactions correctly, reconcile on schedule, and design workflows that feed your strategy—not just your statements.",
    showOnHomePage: false,
    track: "business",
    sections: [
      {
        heading: "Automated, Accurate Bookkeeping",
        body: "QuickBooks done right: synced feeds, rules that reduce errors, and consistent reconciliations—so your books stay clean and tax-ready.",
      },
      {
        heading: "Comprehensive Record Management",
        body: "We manage invoices, expenses, bank recs, and payroll data so your ledgers are audit-ready and aligned with tax law classifications.",
      },
      {
        heading: "Real-Time Financial Insights",
        body: "Dashboards and monthly statements reveal cash flow, margins, and AR/AP—supporting faster decisions and better tax planning.",
      },
      {
        heading: "Customized QuickBooks Solutions",
        body: "Chart-of-accounts tuned to your business, role-based workflows, and automation for recurring processes to support operational streamlining.",
      },
      {
        heading: "Focus on Growth",
        body: "Clean books compound value: they power forecasting, support compliance, and reveal opportunities for tax savings and profit.",
      },
    ],
  },
  {
    slug: "payroll-compliance",
    title: "Payroll & Compliance",
    icon: HiCreditCard,
    description:
      "Accurate, on-time payroll with compliance built in. We reduce risk, avoid penalties, and keep filings current—freeing you to focus on your team and operations.",
    showOnHomePage: true,
    track: "business",
    sections: [
      {
        heading: "Complex Payroll Regulations",
        body: "Federal, state, and local rules affect withholding, overtime, and worker classification. We keep you aligned—no guesswork.",
      },
      {
        heading: "Avoiding Costly Errors",
        body: "Misclassification and incorrect withholding trigger audits and fines. We build controls that prevent errors before they cost you.",
      },
      {
        heading: "Complete Payroll Management",
        body: "Processing, 941/944 filings, SUI, W-2/1099s, garnishments—handled end-to-end with audit-ready records.",
      },
      {
        heading: "Technology-Driven Efficiency",
        body: "Time-tracking and payroll platforms automate calculations and maintain clean, defensible records.",
      },
      {
        heading: "Peace of Mind Every Pay Period",
        body: "We run payroll with discipline and transparency so you can lead confidently—and protect margins.",
      },
    ],
  },
  {
    slug: "nonprofit-specialty",
    title: "Nonprofit & Specialty Accounting",
    icon: HiHeart,
    description:
      "Grant tracking, fund accounting, and clear reporting—so you maintain donor trust, satisfy regulators, and focus on mission.",
    showOnHomePage: true,
    track: "business",
    sections: [
      {
        heading: "Complexities of Nonprofit Finance",
        body: "Donor restrictions, grant compliance, and IRS rules add layers of control. We design systems that keep every dollar accountable.",
      },
      {
        heading: "Fund-Level Tracking",
        body: "We implement fund accounting and grant controls so allocations, restrictions, and outcomes are crystal-clear.",
      },
      {
        heading: "IRS and Audit Support",
        body: "Form 990 with Schedule A narratives, restricted net asset tracking, and complete support for internal/external audits.",
      },
      {
        heading: "Streamlined Processes",
        body: "Internal controls and dashboards reduce spreadsheet sprawl—documenting every step for transparency.",
      },
      {
        heading: "Transparency and Stewardship",
        body: "We help you demonstrate stewardship and strengthen donor confidence through clear, consistent reporting.",
      },
    ],
  },
  {
    slug: "business-advisory",
    title: "Business Advisory (Profit & Process)",
    icon: HiChartBar,
    description:
      "Turn data into decisions. We optimize pricing, cash flow, and systems—linking day-to-day operations to tax-efficient growth.",
    showOnHomePage: true,
    track: "business",
    sections: [
      {
        heading: "Turning Data into Strategy",
        body: "Forecasts, budgets, and performance analysis so you act deliberately—not reactively.",
      },
      {
        heading: "Optimizing Business Structure",
        body: "We advise on legal structure, pricing models, and expense controls—supporting operation streamline and scalability.",
      },
      {
        heading: "Ongoing Strategic Support",
        body: "Monthly reviews and board-ready metrics to bolster margins, reduce risk, and highlight tax-efficient moves.",
      },
      {
        heading: "Planning for the Future",
        body: "Scenario modeling clarifies expansion timing, capital needs, and hiring decisions.",
      },
      {
        heading: "Partnering for Growth",
        body: "We align systems with goals and surface opportunities for profit and tax savings.",
      },
    ],
  },
  {
    slug: "estate-specialized",
    title: "Estate & Trust Planning",
    icon: HiCollection,
    description:
      "Protect your legacy with planning that minimizes tax impact and provides clear, compassionate support to families and executors.",
    showOnHomePage: true,
    track: "individual",
    sections: [
      {
        heading: "Understanding Estate Complexities",
        body: "Federal estate taxes, state inheritance rules, probate, and family goals—all planned with foresight.",
      },
      {
        heading: "Trust and Gift Strategies",
        body: "Living/irrevocable trusts, gift strategies, and QTIP planning to reduce exposure and align with intent.",
      },
      {
        heading: "Tax Preparation and Filing",
        body: "Form 706 preparation, coordination with counsel, and smooth asset transfer planning.",
      },
      {
        heading: "Support for Executors and Families",
        body: "We handle valuation, liquidity needs, and timelines so families can decide calmly.",
      },
      {
        heading: "Legacy Protection",
        body: "Tax-efficient wealth transfer guided by experienced CPAs who communicate clearly and respectfully.",
      },
    ],
  },
  {
    slug: "tax-resolution-audit-defense",
    title: "Tax Resolution & Audit Defense",
    icon: HiShieldCheck,
    description:
      "Notices, audits, penalties—resolved. We negotiate on your behalf and restore full compliance as quickly and affordably as possible.",
    showOnHomePage: false,
    track: "individual",
    sections: [
      {
        heading: "Representation & Notice Resolution",
        body: "We handle IRS/state notices (CP-2000, audits, collections), appeals, POA, abatements, and lien/levy releases.",
      },
      {
        heading: "Installment Agreements & OICs",
        body: "We negotiate payment plans and Offers-in-Compromise that protect cash flow and stability.",
      },
      {
        heading: "Audit Defense",
        body: "We prepare documentation and represent you end-to-end—reducing penalties and uncertainty.",
      },
      {
        heading: "Proactive Compliance Reviews",
        body: "Preemptive checks catch misclassifications or discrepancies before they escalate.",
      },
      {
        heading: "Support Until Resolution",
        body: "We stay engaged until liabilities are cleared and your compliance posture is fully restored.",
      },
    ],
  },
  {
    slug: "individual-bookkeeping-organization",
    title: "Financial Organization & Bookkeeping for Individuals",
    icon: HiFolder,
    description:
      "Personal financial organization and bookkeeping services to help individuals track expenses, organize records, and prepare for tax season with confidence.",
    showOnHomePage: false,
    track: "individual",
    sections: [
      {
        heading: "Personal Financial Organization",
        body: "We help organize your personal finances, categorize expenses, and create systems for tracking income, deductions, and financial records throughout the year.",
      },
      {
        heading: "Individual Bookkeeping Services",
        body: "Professional bookkeeping for individuals with complex finances, side businesses, rental properties, or investment income requiring detailed record-keeping.",
      },
      {
        heading: "Tax Preparation Support",
        body: "Year-round organization ensures smooth tax preparation with all necessary documents, receipts, and financial records properly categorized and accessible.",
      },
      {
        heading: "Expense Tracking & Deduction Optimization",
        body: "Systematic tracking of deductible expenses including business costs, medical expenses, charitable donations, and investment-related fees.",
      },
      {
        heading: "Financial Record Management",
        body: "Digital and physical record management systems that maintain compliance requirements while providing easy access to important financial documents.",
      },
    ],
  },
  {
    slug: "refund-deduction-maximization",
    title: "Maximizing Refunds & Deductions",
    icon: HiCalculator,
    description:
      "Comprehensive review and optimization of your tax situation to ensure you claim every deduction and credit available, maximizing your refund potential.",
    showOnHomePage: false,
    track: "individual",
    sections: [
      {
        heading: "Comprehensive Deduction Review",
        body: "Thorough analysis of all potential deductions including itemized deductions, business expenses, educational costs, and often-overlooked tax benefits.",
      },
      {
        heading: "Credit Optimization",
        body: "Identification and application of all available tax credits including Child Tax Credit, Education Credits, Earned Income Credit, and specialized credits.",
      },
      {
        heading: "Strategic Tax Planning",
        body: "Year-round planning to position your finances for maximum tax benefits, including timing of income, expenses, and major financial decisions.",
      },
      {
        heading: "Prior Year Reviews",
        body: "Review of previous tax returns to identify missed deductions or credits, with amended return preparation when beneficial.",
      },
      {
        heading: "Documentation & Record Support",
        body: "Guidance on proper documentation and record-keeping to support all claimed deductions and credits, ensuring audit-readiness.",
      },
    ],
  },
  {
    slug: "financial-distress-complexity-support",
    title: "Specialized Support for Financial Distress & Complexity",
    icon: HiSupport,
    description:
      "Expert guidance through complex financial situations including debt resolution, bankruptcy considerations, major life changes, and intricate tax scenarios.",
    showOnHomePage: false,
    track: "individual",
    sections: [
      {
        heading: "Financial Crisis Navigation",
        body: "Compassionate guidance through financial difficulties including job loss, medical expenses, divorce, or other major life disruptions affecting your tax situation.",
      },
      {
        heading: "Complex Tax Situations",
        body: "Expert handling of intricate scenarios including multiple income sources, foreign income, complex investments, inheritance issues, and unusual deductions.",
      },
      {
        heading: "Debt & Bankruptcy Considerations",
        body: "Strategic advice on tax implications of debt forgiveness, bankruptcy proceedings, and financial restructuring to minimize long-term tax consequences.",
      },
      {
        heading: "IRS Problem Resolution",
        body: "Specialized support for individuals facing IRS collection actions, payment difficulties, or complex compliance issues requiring expert intervention.",
      },
      {
        heading: "Financial Recovery Planning",
        body: "Long-term planning to rebuild financial stability while optimizing tax strategies during recovery periods and major life transitions.",
      },
    ],
  },
  {
    slug: "self-employed-accounting",
    title: "Self-Employed & Freelancer Accounting",
    icon: HiCalculator,
    description:
      "Specialized accounting, tax planning, and compliance for freelancers, gig workers, and self-employed individuals. Maximize deductions, manage quarterly taxes, and keep your business finances stress-free.",
    showOnHomePage: true,
    track: "individual",
    sections: [
      {
        heading: "Tax Optimization for Self-Employed",
        body: "Identify every legal deduction—home office, mileage, equipment, retirement contributions, and more—to minimize your tax bill.",
      },
      {
        heading: "Quarterly Tax Planning & Payments",
        body: "Never miss an estimated payment. We calculate, schedule, and help you avoid penalties and surprises.",
      },
      {
        heading: "Bookkeeping & Income Tracking",
        body: "Simple, streamlined bookkeeping solutions tailored for solo businesses and freelancers—so you always know where you stand.",
      },
      {
        heading: "1099, Schedule C, and Compliance",
        body: "We handle all forms and filings, including 1099s, Schedule C, and self-employment tax, so you stay compliant and audit-ready.",
      },
      {
        heading: "Business Growth Guidance",
        body: "From entity selection to retirement planning, we advise on every step as your solo business grows.",
      },
    ],
  },
];
