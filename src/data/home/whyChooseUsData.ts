import { HomeData } from "@/types/internal/home/homeData";
import { HiBriefcase, HiUser, HiGlobeAlt } from "react-icons/hi";
import { GiArabicDoor } from "react-icons/gi";

export const whyChooseUsData: HomeData[] = [
  {
    title: "Certified & Experienced",
    description:
      "Work with licensed CPAs and Enrolled Agents who stay up‑to‑date with ever‑changing tax laws, ensuring your returns and plans are compliant and optimized.",
    icon: HiBriefcase,
  },
  {
    title: "Personalized Guidance",
    description:
      "You’re never just another number. We take the time to understand your goals and tailor our services to your unique situation.",
    icon: HiUser,
  },
  {
    title: "Local & Remote",
    description:
      "Meet us in Oakland, NJ or connect virtually from anywhere. Our secure technology makes remote tax and bookkeeping effortless.",
    icon: HiGlobeAlt,
  },
  {
    title: "Multi‑language Friendly",
    description:
      "We speak Arabic and English fluently, ensuring clear communication for a wider community.",
    icon: GiArabicDoor,
  },
];
