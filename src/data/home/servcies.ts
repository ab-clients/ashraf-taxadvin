import { HomeData } from "@/types/internal/home/homeData";
import {
  HiDocumentText, // Tax Preparation & Planning
  HiBookOpen, // Bookkeeping & QuickBooks
  HiCreditCard, // Payroll & Compliance
  HiHeart, // Nonprofit & Specialty
  HiChartBar, // Business Advisory
  HiCollection, // Estate & Specialized
} from "react-icons/hi";

export const services: HomeData[] = [
  {
    title: "Tax Preparation & Planning",
    description:
      "Maximize compliance and minimize stress by letting our team handle your individual or business returns. We ensure accuracy, leverage applicable deductions and credits, and strategize for your future.",
    icon: HiDocumentText,
  },
  {
    title: "Bookkeeping & QuickBooks",
    description:
      "Stay organized with meticulous record‑keeping, transaction categorization and reconciliation. We’re QuickBooks experts and offer setup, training and ongoing management.",
    icon: HiBookOpen,
  },
  {
    title: "Payroll & Compliance",
    description:
      "Ensure your team is paid accurately and on time. Our payroll services include tax submissions and compliance monitoring to free up your time and reduce risk.",
    icon: HiCreditCard,
  },
  {
    title: "Nonprofit & Specialty",
    description:
      "For nonprofits and specialized entities, we provide grant tracking, fund accounting and reporting to ensure transparency and regulatory compliance.",
    icon: HiHeart,
  },
  {
    title: "Business Advisory",
    description:
      "Leverage decades of experience to improve cash flow, create efficient systems and build sustainable growth through strategic planning and financial analysis.",
    icon: HiChartBar,
  },
  {
    title: "Estate & Specialized",
    description:
      "Get guidance on estate and trust planning, inheritance taxes and other specialized filings to protect your legacy and minimize tax impact.",
    icon: HiCollection,
  },
];
