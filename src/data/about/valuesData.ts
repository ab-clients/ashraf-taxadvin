import { HomeData } from "@/types/internal/home/homeData";
import {
  HiShieldCheck,
  HiChatAlt2,
  HiHeart,
  HiLightningBolt,
} from "react-icons/hi";

/**
 * Key values that underpin TaxAdvin’s mission.  We reuse the HomeData type to
 * ensure each value includes a title, description and icon component.
 *
 * Professionalism & Excellence reflects our commitment to high standards of
 * service and competence.
 * Responsiveness & Attention highlights the close analysis and personal service
 * our clients appreciate.
 * Integrity & Trust emphasises our dedication to building lasting relationships
 * founded on honesty and transparency.
 * Proactive & Innovative speaks to our focus on minimizing taxes and improving
 * cash flows through forward‑thinking strategies.
 */
export const valuesData: HomeData[] = [
  {
    title: "Professionalism & Excellence",
    description:
      "We hold ourselves to the highest standards of excellence and professionalism, ensuring every client receives competent, accurate and timely advice.",
    icon: HiShieldCheck,
  },
  {
    title: "Responsiveness & Attention",
    description:
      "Your goals are our priority. We deliver close analysis, open communication and responsive service tailored to your needs.",
    icon: HiChatAlt2,
  },
  {
    title: "Integrity & Trust",
    description:
      "We build lasting relationships founded on trust, integrity and a commitment to your long‑term financial health.",
    icon: HiHeart,
  },
  {
    title: "Proactive & Innovative",
    description:
      "By staying current with tax laws and planning ahead, we minimize your tax burden, improve cash flows and position you for growth.",
    icon: HiLightningBolt,
  },
];
