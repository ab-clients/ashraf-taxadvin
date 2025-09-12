import { HomeData } from "@/types/internal/home/homeData";
import { HiOfficeBuilding, HiUser, HiBriefcase } from "react-icons/hi";
import { HiGlobeAmericas } from "react-icons/hi2";

export const whyChooseUsData: HomeData[] = [
  {
    title: "Certified CPA Expertise",
    description:
      "Licensed CPA with deep experience in tax optimization and strategic financial planning. We optimize every return and transaction to maximize your tax savings.",
    icon: HiBriefcase,
  },
  {
    title: "Fractional CFO Value",
    description:
      "Get enterprise-level financial leadership without the full-time cost and overhead. Strategic guidance that transforms your business finances and growth.",
    icon: HiOfficeBuilding,
  },
  {
    title: "Personal Partnership",
    description:
      "You're not just a number. We provide personalized attention and strategic guidance year-round with clear communication in both English and Arabic.",
    icon: HiUser,
  },
  {
    title: "Flexible & Accessible",
    description:
      "Meet us in Orlando, FL or connect virtually from anywhere. Our secure technology makes remote tax and bookkeeping effortless for global clients.",
    icon: HiGlobeAmericas,
  },
];
