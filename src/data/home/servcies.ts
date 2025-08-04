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
} from "react-icons/hi";

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "tax-preparation-planning",
    title: "Tax Preparation & Planning",
    icon: HiDocumentText,
    description:
      "Maximize compliance and minimize stress by letting our team handle your individual or business returns. We ensure accuracy, leverage applicable deductions and credits, and strategize for your future.",
    showOnHomePage: true,
    sections: [
      {
        heading: "Proactive Tax Planning",
        body: "At TaxAdvin, we empower you with early tax planning to help retain more income and wealth. By timing your income, accelerating deductions, and identifying credits proactively, we reduce your overall tax bill and position you for the road ahead.",
      },
      {
        heading: "Strategic Tax Optimization",
        body: "Beyond filing—we strategize: reviewing entity structure, retirement planning, and specialized credits (like R&D, WOTC, or capital equipment). This ensures your financial decisions are tax-optimized at every turn.",
      },
      {
        heading: "Streamlined Filing Process",
        body: "Our verified process includes gathering documents in advance, checking for inconsistencies, filing necessary extensions, and managing estimated taxes—eliminating last-minute pressure and surprise liabilities.",
      },
      {
        heading: "Support for Individuals and Businesses",
        body: "Individuals enjoy hassle-free IRS and state e-filing with support in audit or penalty reviews. Business owners get quarterly reviews, planning sessions, and guidance tailored to LLCs, corporations, or partnerships.",
      },
      {
        heading: "Year-Round Advantage",
        body: "When you choose TaxAdvin, you gain a tax professional who listens, explains clearly, and provides ongoing support—transforming tax season from a stressor into a year-round advantage.",
      },
    ],
  },
  {
    slug: "bookkeeping-quickbooks",
    title: "Bookkeeping & QuickBooks",
    icon: HiBookOpen,
    description:
      "Stay organized with meticulous record-keeping, transaction categorization and reconciliation. We're QuickBooks experts and offer setup, training and ongoing management.",
    showOnHomePage: true,
    sections: [
      {
        heading: "Automated, Accurate Bookkeeping",
        body: "With bookkeeping built around QuickBooks, your accounting runs on autopilot: transactions sync, bank feeds auto-match, and the risk of entry errors drops dramatically—guaranteeing cleaner books.",
      },
      {
        heading: "Comprehensive Record Management",
        body: "TaxAdvin handles your day-to-day records: we sort incoming invoices, track expenses, reconcile bank statements, and maintain payroll data so your books are always audit-ready.",
      },
      {
        heading: "Real-Time Financial Insights",
        body: "You'll get real-time dashboards and monthly financial statements that surface cash flow, profit margins, and unpaid invoices—enabling faster, better decisions.",
      },
      {
        heading: "Customized QuickBooks Solutions",
        body: "We customize QuickBooks to your business: chart-of-accounts setup, custom reconciliations, staff training, and workflow automation for recurring processes.",
      },
      {
        heading: "Focus on Growth",
        body: "Choose TaxAdvin and get more than bookkeeping: you get an organized financial structure that supports tax planning, forecasting, and helps you stay focused on growth.",
      },
    ],
  },
  {
    slug: "payroll-compliance",
    title: "Payroll & Compliance",
    icon: HiCreditCard,
    description:
      "Ensure your team is paid accurately and on time. Our payroll services include tax submissions and compliance monitoring to free up your time and reduce risk.",
    showOnHomePage: true,
    sections: [
      {
        heading: "Complex Payroll Regulations",
        body: "U.S. payroll is governed by federal, state, and local laws—touching everything from tax withholding to overtime and classification. Staying compliant in this landscape is essential.",
      },
      {
        heading: "Avoiding Costly Errors",
        body: "Errors such as misclassifying staff, incorrect withholding or missed overtime rules can result in fines, audits, and penalties that damage your cash flow or business reputation.",
      },
      {
        heading: "Complete Payroll Management",
        body: "Our all-inclusive payroll service handles paycheck processing, quarterly (941/944) filings, state unemployment, W-2/1099 generation, and garnishment or SUI reporting.",
      },
      {
        heading: "Technology-Driven Efficiency",
        body: "We integrate trusted payroll-compliance software and time-tracking tools to automate calculations, improve record accuracy, and reduce manual oversight.",
      },
      {
        heading: "Peace of Mind Every Pay Period",
        body: "Work with TaxAdvin and rest easy—your payroll is compliant and secure every payment period, letting you focus on your team and operations.",
      },
    ],
  },
  {
    slug: "nonprofit-specialty",
    title: "Nonprofit & Specialty Accounting",
    icon: HiHeart,
    description:
      "For nonprofits and specialized entities, we provide grant tracking, fund accounting and reporting to ensure transparency and regulatory compliance.",
    showOnHomePage: true,
    sections: [
      {
        heading: "Complexities of Nonprofit Finance",
        body: "Nonprofits must comply with donor agreements, fund restrictions, and IRS regulations—but grant-based funding introduces extra levels of complexity. Fund accounting helps you manage this effectively.",
      },
      {
        heading: "Fund-Level Tracking",
        body: "We implement fund-level tracking and grant management systems so each dollar is clearly tagged, allocated, and reported separately—ensuring confident audit-readiness.",
      },
      {
        heading: "IRS and Audit Support",
        body: "TaxAdvin prepares Schedule A and detailed notes for IRS Form 990, manages restricted net assets, and supports both internal and external audits.",
      },
      {
        heading: "Streamlined Processes",
        body: "We build internal controls and dashboards so you spend less time on spreadsheets and more time on your mission. All activity is thoroughly documented for transparency and trust.",
      },
      {
        heading: "Transparency and Stewardship",
        body: "Choose TaxAdvin for nonprofit accounting services designed for clarity—so you can demonstrate stewardship, maintain donor confidence, and operate with financial accountability.",
      },
    ],
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    icon: HiChartBar,
    description:
      "Leverage decades of experience to improve cash flow, create efficient systems and build sustainable growth through strategic planning and financial analysis.",
    showOnHomePage: true,
    sections: [
      {
        heading: "Turning Data into Strategy",
        body: "Business advisory empowers you to turn financial data into actionable strategy. We offer cash flow forecasting, budgeting, and performance analysis so you can act deliberately, not reactively.",
      },
      {
        heading: "Optimizing Business Structure",
        body: "We consult on choosing the right legal structure, setting pricing models, expense optimizations, and system improvements that streamline operations.",
      },
      {
        heading: "Ongoing Strategic Support",
        body: "From monthly financial reviews to succession planning, our goal is to bolster profit margins, minimize risk, and guide strategic business decisions.",
      },
      {
        heading: "Planning for the Future",
        body: "Whether you're considering expansion or managing cash gaps, our projections and scenario modeling give you visibility into future needs and investment timing.",
      },
      {
        heading: "Partnering for Growth",
        body: "When you engage TaxAdvin, you partner with advisors who align financial systems to your goals, providing clarity and a roadmap for sustainable growth.",
      },
    ],
  },
  {
    slug: "estate-specialized",
    title: "Estate & Trust Planning",
    icon: HiCollection,
    description:
      "Get guidance on estate and trust planning, inheritance taxes and other specialized filings to protect your legacy and minimize tax impact.",
    showOnHomePage: true,
    sections: [
      {
        heading: "Understanding Estate Complexities",
        body: "Estate planning involves complex federal estate taxes, state inheritance rules, probate, beneficiary rights, and family considerations—all of which can be mitigated with proper planning.",
      },
      {
        heading: "Trust and Gift Strategies",
        body: "We assist with living and irrevocable trusts, gift-tax planning strategies, and qualified terminable interest property (QTIP) trusts to reduce your estate's tax exposure.",
      },
      {
        heading: "Tax Preparation and Filing",
        body: "TaxAdvin calculates projected estate tax liability, prepares IRS Form 706 when needed, coordinates with legal counsel, and plans for smooth transfer of assets.",
      },
      {
        heading: "Support for Executors and Families",
        body: "We support valuation, liquidity, and probate timelines so executors and families avoid surprises and can manage inherited assets calmly.",
      },
      {
        heading: "Legacy Protection",
        body: "With TaxAdvin's estate services, you gain access to seasoned CPAs experienced in tax-efficient wealth transfer, compassionate guidance, and future-oriented structuring.",
      },
    ],
  },
  {
    slug: "tax-resolution-audit-defense",
    title: "Tax Resolution & Audit Defense",
    icon: HiShieldCheck,
    description:
      "Resolve IRS/state liabilities and protect your rights if you're facing audits, notices, or penalties through expert negotiation and representation.",
    showOnHomePage: false,
    sections: [
      {
        heading: "Representation & Notice Resolution",
        body: "We handle IRS and state notice letters (CP‑2000, audits, collections), appeals, power-of-attorney, penalty abatements, and lien/levy releases—providing expert responses that resolve most cases at first contact.",
      },
      {
        heading: "Installment Agreements & OICs",
        body: "Our team negotiates installment plans and Offers‑in‑Compromise to reduce liabilities while preserving cash flow—designed to help you regain financial stability quickly and affordably.",
      },
      {
        heading: "Audit Defense",
        body: "During IRS or state audits, we review records, prepare documentation, and represent you throughout—shielding you from escalating costs, penalties, and unexpected outcomes.",
      },
      {
        heading: "Proactive Compliance Reviews",
        body: "We conduct preemptive tax reviews to identify income discrepancies or payroll misclassifications—resolving issues before they trigger notices or penalties.",
      },
      {
        heading: "Comprehensive Support Till Resolution",
        body: "With TaxAdvin, you're not alone: our resolution team sticks with you until all liabilities are resolved and your compliance is fully restored.",
      },
    ],
  },
  {
    slug: "virtual-cfo-financial-leadership",
    title: "Virtual CFO & Strategic Financial Leadership",
    icon: HiChartPie,
    description:
      "Access CFO‑level financial oversight—cash forecasting, KPI tracking, growth planning—without a full-time executive.",
    showOnHomePage: false,
    sections: [
      {
        heading: "Strategic Financial Oversight",
        body: "Get ongoing, high-level financial leadership through a fractional or virtual CFO model—ideal for growing businesses that need top-tier guidance without executive overhead.",
      },
      {
        heading: "Rolling Cash Flow & Scenario Models",
        body: "We create forward-looking cash flow models, budget scenarios, and performance dashboards so you can make data-backed decisions and manage capital proactively.",
      },
      {
        heading: "KPI & Profitability Analysis",
        body: "Benchmark your margins, monitor gross/net profitability, and analyze pricing structures across product lines to fine‑tune revenue drivers and reduce costs.",
      },
      {
        heading: "Capital & ERP Planning Support",
        body: "We advise on capital fundraising readiness, debt strategy, system implementation (ERP, billing), and operational optimization aligned to your goals.",
      },
      {
        heading: "Enterprise-Level Value, Fractional Cost",
        body: "Our virtual CFO services deliver elite financial strategy and roadmaps—without the full-time salary, benefits, or managerial burden.",
      },
    ],
  },
  {
    slug: "entity-formation-structuring",
    title: "Entity Formation & Tax Structuring",
    icon: HiOfficeBuilding,
    description:
      "Starting or restructuring a business? We handle LLCs, corporations, S‑Corp elections, EINs, governance and multi-state tax planning for tax-efficient structure.",
    showOnHomePage: false,
    sections: [
      {
        heading: "Legal & Tax Structure Advice",
        body: "We advise whether to form as S‑Corp, C‑Corp, LLC, or partnership based on liability protection, tax impact, and future business goals like financing or exit.",
      },
      {
        heading: "Formation & Compliance Filing",
        body: "Our team prepares Articles of Incorporation, Operating Agreements, EIN applications, state registrations, and ongoing compliance documents—including BOI filings and annual reports.",
      },
      {
        heading: "Ownership & Governance Setup",
        body: "We help structure ownership, vesting, and shareholder agreements to guard long-term clarity—key for funding, succession, and partnership scenarios.",
      },
      {
        heading: "Multi-State Presence Planning",
        body: "Planning to do business across multiple states? We manage state tax registration, nexus analysis, and multi-state compliance to minimize exposure and complexity.",
      },
      {
        heading: "One‑Sheet Tax Impact Summary",
        body: "Each structure includes a clear, one-page tax impact summary and governance roadmap—a planning tool clients can reference year-round.",
      },
    ],
  },
  {
    slug: "international-tax-compliance-planning",
    title: "International Tax Compliance & Planning",
    icon: HiGlobeAlt,
    description:
      "Navigate U.S. and cross‑border taxation with support on FBAR/FinCen, transfer pricing, foreign credits, and treaty analysis to reduce tax exposure.",
    showOnHomePage: false,
    sections: [
      {
        heading: "Cross-Border Tax Advisory",
        body: "We guide inbound and outbound investments, global transactions, and remote workforce compliance with U.S. tax rules—and manage foreign exposure.",
      },
      {
        heading: "FBAR & Foreign Income Reporting",
        body: "Our team handles FBAR, FinCEN filing, foreign income tax returns, and tracks foreign financial holdings to avoid penalties and ensure accurate disclosure.",
      },
      {
        heading: "Foreign Tax Credit Optimization",
        body: "Reduce double taxation with transfer pricing strategies, withholding planning, foreign tax credit maximization, and tax treaty provisions.",
      },
      {
        heading: "Entity Structuring & Treaty Analysis",
        body: "We structure investment entities for tax mitigation and leverage international treaty environments for capital movement and cross-border transactions.",
      },
      {
        heading: "Global Compliance for U.S. Taxpayers",
        body: "We advise on offshore trusts, cryptocurrency holdings, foreign real estate, and worldwide estate tax planning for U.S. taxpayers with international exposure.",
      },
    ],
  },
  {
    slug: "succession-exit-strategic-planning",
    title: "Succession Planning & M&A Advisory",
    icon: HiUserGroup,
    description:
      "Preparing to sell your business, bring in partners, or retire? We guide business valuation, M&A structuring and partner transitions to protect value and minimize tax.",
    showOnHomePage: false,
    sections: [
      {
        heading: "Exit & Transition Planning",
        body: "We help business owners plan exit strategies—whether selling to third parties, passing to family, or transitioning leadership—focusing on value preservation and tax efficiency.",
      },
      {
        heading: "Valuation & Deal Structuring",
        body: "Business valuations, drafting buy-sell agreements, and structuring deals that maximize after-tax proceeds—tailored to exit or partner transition goals.",
      },
      {
        heading: "M&A & Transaction Advisory",
        body: "Our advisory covers due diligence, quality-of-earnings reporting, negotiation support, and post-closing integration to help deals close smoothly.",
      },
      {
        heading: "Ownership Continuity Governance",
        body: "We ensure governance structures and owner alignment support your transfer goals—protecting family, partner, or employee transitions from legal and tax uncertainty.",
      },
      {
        heading: "Legacy & Financial Continuity",
        body: "We guide exit-planning with an emphasis on legacy preservation—helping clients achieve tax-optimized transitions that reflect their long-term vision and values.",
      },
    ],
  },
];
