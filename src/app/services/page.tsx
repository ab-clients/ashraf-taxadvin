// app/services/page.tsx
import { serviceDetails } from "@/data/servcies";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto text-gray-800 dark:text-gray-100 ">
      <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
        At TaxAdvin, we offer comprehensive financial and tax solutions tailored
        to individuals, businesses, and nonprofits. Explore our core service
        offerings below.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {serviceDetails.map((service, idx) => (
          <div
            key={service.slug}
            className="flex items-start gap-4"
            data-aos="fade-up"
            data-aos-delay={`${((idx % 2) + 1) * 100}`}
          >
            <service.icon className="text-blue-600 dark:text-blue-400 mt-1 w-24 h-24" />
            <div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block"
              >
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
