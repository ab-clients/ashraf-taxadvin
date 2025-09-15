import Image from "next/image";
import { testimonialsData } from "@/data/home/testimonialData";

export const TestimonialsSection = () => {
  return (
    <section className="py-8 px-6 lg:px-8 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
          What Our Clients Say
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300 mx-auto text-center">
          Our success is measured by the results we deliver and the trust we
          build. Here are a few words from those we’ve helped.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-sm shadow-gray-500 dark:shadow-gray-950 dark:bg-gray-900 dark:border dark:border-gray-700 flex flex-col"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow italic">
                “{testimonial.quote}”
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
