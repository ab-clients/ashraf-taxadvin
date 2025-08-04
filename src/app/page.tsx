import { ConsultationCTASection } from "@/components/pages/home/ConsultationCTASection";
import { ContactUsSection } from "@/components/pages/home/ContactUsSection";
import { HeroSection } from "@/components/pages/home/HeroSection";
import { PricingSection } from "@/components/pages/home/PricingSection";
import { ResourceHubSection } from "@/components/pages/home/ResourceHubSection";
import { ServicesSection } from "@/components/pages/home/ServicesSection";
import { TestimonialsSection } from "@/components/pages/home/TestimonialsSection";
import { WhyChooseUsSection } from "@/components/pages/home/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <TestimonialsSection />
      {/* <ContactUsSection /> */}
      <PricingSection />
      <ResourceHubSection />
      <ConsultationCTASection />
    </div>
  );
}
