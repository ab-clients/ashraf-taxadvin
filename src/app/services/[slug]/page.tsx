import { notFound } from "next/navigation";
import { HiArrowLeft, HiCheckCircle } from "react-icons/hi";
import Link from "next/link";
import {
  allServices,
  businessServices,
  individualServices,
} from "@/data/services/allServicesData";
import { ServiceConsultationButton } from "../ServiceConsultationButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) return notFound();

  // Determine track color for styling
  // Business track: blue shades, Individual track: green shades

  const isBusiness = businessServices.some((s) => s.slug === slug);
  const isIndividual = individualServices.some((s) => s.slug === slug);

  let trackColor: "sky" | "emerald" | "gray" = "gray"; // default
  if (isIndividual) trackColor = "emerald";
  else if (isBusiness) trackColor = "sky";

  const trackColorClasses = {
    sky: {
      icon: "text-sky-600 dark:text-sky-400",
      badge: "bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300",
      card: "border-sky-200 dark:border-sky-800",
      accent: "text-sky-600 dark:text-sky-400",
      button: "bg-sky-600 hover:bg-sky-700",
    },
    emerald: {
      icon: "text-emerald-600 dark:text-emerald-400",
      badge:
        "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300",
      card: "border-emerald-200 dark:border-emerald-800",
      accent: "text-emerald-600 dark:text-emerald-400",
      button: "bg-emerald-600 hover:bg-emerald-700",
    },
    gray: {
      icon: "text-gray-600 dark:text-gray-400",
      badge: "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300",
      card: "border-gray-200 dark:border-gray-800",
      accent: "text-gray-600 dark:text-gray-400",
      button: "bg-gray-600 hover:bg-gray-700",
    },
  };

  const colors = trackColorClasses[trackColor];

  const source = isBusiness ? businessServices : individualServices;
  const relatedServices = source
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/services"
            className={`inline-flex items-center ${colors.accent} hover:underline font-medium`}
          >
            <HiArrowLeft className="mr-2 w-4 h-4" />
            Back to Services
          </Link>
        </div>

        {/* Service Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl ${colors.badge}`}>
              <service.icon className={`w-8 h-8 ${colors.icon}`} />
            </div>
            <div>
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.badge} mb-2`}
              >
                {isBusiness ? "Business Service" : "Individual Service"}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Service Sections Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {service.sections.map((section, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 ${colors.card} hover:shadow-xl transition-all duration-300`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${isBusiness ? "from-sky-500 to-blue-500" : "from-emerald-500 to-teal-500"} flex items-center justify-center`}
                >
                  <HiCheckCircle className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                  {section.heading}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how our {service.title.toLowerCase()} services
              can help you achieve your financial goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-appointment"
                className={`inline-flex items-center px-6 py-3 ${colors.button} text-white rounded-lg transition-colors font-semibold`}
              >
                <ServiceConsultationButton serviceSlug={service.slug} />
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center px-6 py-3 border-2 ${colors.card.replace("border-", "border-")} ${colors.accent} rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-semibold`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Other {isBusiness ? "Business" : "Individual"} Services
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {relatedServices.map((relatedService, index) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-3 mb-3">
                  <relatedService.icon className={`w-6 h-6 ${colors.icon}`} />
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {relatedService.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                  {relatedService.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
