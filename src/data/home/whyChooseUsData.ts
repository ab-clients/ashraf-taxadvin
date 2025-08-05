import { HomeData } from "@/types/internal/home/homeData";
import { HiBriefcase } from "react-icons/hi";
import { HiGlobeAmericas } from "react-icons/hi2";
import { FaHandsHelping } from "react-icons/fa";
import { TbBuildingBurjAlArab } from "react-icons/tb";

export const whyChooseUsData: HomeData[] = [
  {
    title: "Certified & Experienced",
    description:
      "Work with licensed CPAs who stay up-to-date with ever-changing tax laws, ensuring your returns and plans are compliant and optimized.",
    icon: HiBriefcase,
  },
  {
    title: "Personalized Guidance",
    description:
      "You’re never just another number. We take the time to understand your goals and tailor our services to your unique situation.",
    icon: FaHandsHelping,
  },
  {
    title: "Local & Remote",
    description:
      "Meet us in Orlando, FL or connect virtually from anywhere. Our secure technology makes remote tax and bookkeeping effortless.",
    icon: HiGlobeAmericas,
  },
  {
    title: "Multi‑language Friendly",
    description:
      "We speak Arabic and English fluently, ensuring clear communication for a wider community.",
    icon: TbBuildingBurjAlArab,
  },
];
