import { StorySection } from "@/app/about/StorySection";
import { MissionStatementSection } from "@/app/about/MissionStatementSection";
import { VisionSection } from "@/app/about/VisionSection";
import { FounderSection } from "@/app/about/FounderSection";

export default function AboutPage() {
  return (
    <section className="pt-12 pb-8 px-6 lg:px-8 bg-gray-200 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          TaxAdvin & Ashraf Abdeltawab, CPA
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          A trusted partnership between Florida&apos;s premier tax advisory firm
          and a seasoned CPA with over two decades of experience. Together,
          we&apos;re dedicated to your financial success.
        </p>
      </div>

      <StorySection />
      <FounderSection />
      <MissionStatementSection />
      <VisionSection />
    </section>
  );
}
