import { serviceDetails } from "@/data/home/servcies";
import { notFound } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
        {service.title}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        {service.description}
      </p>

      {service.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
          <p className="text-gray-700 dark:text-gray-200">{section.body}</p>
        </div>
      ))}

      {/* Back to Services link */}
      <div className="mt-10 text-right">
        <Link
          href="/services"
          className="inline-flex items-center text-blue-700 dark:text-blue-400 hover:underline"
        >
          <HiArrowLeft className="mr-2 text-lg" />
          Back to our Services
        </Link>
      </div>
    </div>
  );
}
