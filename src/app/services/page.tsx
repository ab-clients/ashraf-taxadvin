import { serviceDetails } from "@/data/servcies";
import Link from "next/link";
import { HiOfficeBuilding, HiUser, HiArrowRight } from "react-icons/hi";

export const metadata = {
  title:
    "Services | TaxAdvin — Fractional CFO, Financial Department Supervision & Tax Savings",
  description:
    "TaxAdvin partners with you as a Fractional CFO to streamline operations, supervise your financial department, and engineer real tax savings for businesses and individuals.",
};

export default function ServicesPage() {
  const businessServiceData = serviceDetails.filter(
    (service) => service.track === "business"
  );

  const individualServiceData = serviceDetails.filter(
    (service) => service.track === "individual"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Services Tracks */}
      <div className="py-10 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services match Your Needs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Whether you&apos;re growing a business or managing personal wealth,
            we have specialized services tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Business Services Track */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <HiOfficeBuilding className="w-8 h-8" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">Business Services</h3>
                  <p className="text-sky-100">
                    Fractional CFO & Strategic Financial Leadership
                  </p>
                </div>
              </div>
              <p className="text-sky-100 leading-relaxed">
                Complete financial department supervision, operational
                streamlining, and strategic guidance to drive growth and
                maximize tax savings.
              </p>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                {businessServiceData.map((service, index) => (
                  <div
                    key={service.slug}
                    className="group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <Link href={`/services/${service.slug}`}>
                      <div className="flex items-start p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                        <div className="flex-shrink-0">
                          <service.icon className="w-6 h-6 text-sky-600 dark:text-sky-400 mt-1" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                        <HiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors opacity-0 group-hover:opacity-100" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Services Track */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <HiUser className="w-8 h-8" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">Individual Services</h3>
                  <p className="text-emerald-100">
                    Personal Tax & Wealth Management
                  </p>
                </div>
              </div>
              <p className="text-emerald-100 leading-relaxed">
                Comprehensive tax preparation, estate planning, and personal
                financial strategies to protect and grow your wealth.
              </p>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                {individualServiceData.map((service, index) => (
                  <div
                    key={service.slug}
                    className="group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <Link href={`/services/${service.slug}`}>
                      <div className="flex items-start p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                        <div className="flex-shrink-0">
                          <service.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mt-1" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                        <HiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors opacity-0 group-hover:opacity-100" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimize Your Financial Future?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            One conversation could reveal credits, deductions, or structure
            changes that significantly lower your tax bill and improve your
            bottom line.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="inline-flex items-center px-8 py-4 bg-white text-sky-600 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Schedule Free 30-Minute Consultation
              <HiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
