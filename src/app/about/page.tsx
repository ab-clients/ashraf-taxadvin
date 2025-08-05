import { StorySection } from "@/components/pages/about/StorySection";
import { MissionStatementSection } from "@/components/pages/about/MissionStatementSection";
import { VisionSection } from "@/components/pages/about/VisionSection";
import { FounderSection } from "@/components/pages/about/FounderSection";

/**
 * About page for TaxAdvin.
 *
 * This page avoids the home page’s hero and card‑based design, instead
 * presenting a cohesive narrative with four simple sections: a story
 * explaining the origins of TaxAdvin, a mission statement, a vision for
 * the future and a biography of our founder.  Each section shares the same
 * background colour as the services page to maintain design consistency.
 */
export default function AboutPage() {
  return (
    <div className="font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <section className="pt-8 px-6 lg:px-8 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            About TaxAdvin
          </h1>
        </div>
      </section>
      <StorySection />
      <MissionStatementSection />
      <VisionSection />
      <FounderSection />
    </div>
  );
}
