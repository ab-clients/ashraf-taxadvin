import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team | TaxAdvin",
  description:
    "Meet our experienced team of licensed CPAs. Ashraf, Samy, and Mona bring decades of expertise in tax, accounting, and financial advisory services.",
  keywords:
    "CPA team, tax professionals, accounting experts, financial advisors, licensed CPAs",
};

const teamMembers = [
  {
    name: "Ashraf",
    title: "Senior CPA & Founder",
    image: "/images/team/ashraf.jpg", // Placeholder path
    bio: [
      "Ashraf is a licensed CPA with over 15 years of experience in tax preparation, financial consulting, and business advisory services. He founded TaxAdvin with the vision of providing personalized, expert financial guidance to individuals and businesses alike.",
      "Throughout his career, Ashraf has specialized in complex tax situations, helping clients navigate intricate financial landscapes while maximizing their tax benefits. His expertise spans individual tax returns, business formations, estate planning, and international tax compliance.",
      "When he's not working with clients, Ashraf enjoys staying current with ever-changing tax laws and regulations, ensuring his clients always receive the most up-to-date advice and strategies for their financial success.",
    ],
  },
  {
    name: "Samy",
    title: "Senior Tax Consultant",
    image: "/images/team/samy.jpg", // Placeholder path
    bio: [
      "Samy brings over 12 years of experience in tax preparation and business consulting to the TaxAdvin team. His analytical approach and attention to detail have helped hundreds of clients achieve their financial goals while staying compliant with all tax regulations.",
      "Specializing in small business accounting and payroll services, Samy has a proven track record of helping entrepreneurs streamline their financial processes and maximize profitability. He is particularly skilled in QuickBooks implementation and ongoing bookkeeping support.",
      "Samy is known for his patient teaching style and ability to explain complex financial concepts in simple terms, ensuring clients understand their financial position and the strategies being implemented on their behalf.",
    ],
  },
  {
    name: "Mona",
    title: "Tax Specialist & Financial Advisor",
    image: "/images/team/mona.jpg", // Placeholder path
    bio: [
      "Mona is a dedicated tax specialist with 10 years of experience helping individuals and families navigate their tax obligations while planning for long-term financial success. Her expertise in personal tax planning and retirement strategies has made her an invaluable asset to the TaxAdvin team.",
      "She specializes in working with healthcare professionals, real estate investors, and high-net-worth individuals, providing comprehensive tax planning strategies that align with their unique financial situations and long-term objectives.",
      "Mona is passionate about financial education and regularly conducts workshops on tax planning strategies. Her commitment to client service and her ability to build lasting relationships has earned her recognition as a trusted advisor in the community.",
    ],
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 dark:from-sky-800 dark:to-blue-900 py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Our licensed CPAs bring decades of combined experience in tax
            preparation, financial consulting, and business advisory services.
            We&apos;re here to help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Photo */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                      {/* Placeholder for actual image */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-900">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-sky-600 dark:bg-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-white dark:text-gray-900">
                              {member.name.charAt(0)}
                            </span>
                          </div>
                          <p className="text-sky-700 dark:text-sky-300 font-medium">
                            Professional Photo
                          </p>
                          <p className="text-sm text-sky-600 dark:text-sky-400 mt-1">
                            Coming Soon
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {member.name}
                      </h2>
                      <p className="text-xl text-sky-600 dark:text-sky-400 font-semibold">
                        {member.title}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {member.bio.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="pt-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-700 transition"
                        >
                          Schedule Consultation
                        </Link>
                        <a
                          href="mailto:contact@taxadvin.com"
                          className="inline-flex items-center justify-center border-2 border-sky-600 text-sky-600 dark:text-sky-400 dark:border-sky-400 font-semibold px-6 py-3 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/20 transition"
                        >
                          Send Message
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you need individual tax preparation, business consulting, or
            comprehensive financial planning, our experienced team is here to
            help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center bg-sky-600 text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-sky-700 transition shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-sky-600 text-sky-600 dark:text-sky-400 dark:border-sky-400 font-semibold text-lg px-8 py-4 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/20 transition"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
