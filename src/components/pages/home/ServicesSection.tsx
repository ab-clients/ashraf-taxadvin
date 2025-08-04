import { serviceDetails } from "@/data/servcies";

export const ServicesSection = () => {
  const filteredServices = serviceDetails.filter(
    (service) => service.showOnHomePage !== false
  );

  return (
    <section
      id="services"
      className="py-16 px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Our Services
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          From tax preparation and planning to bookkeeping, payroll and
          consultation, we’ve got you covered.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map(({ title, description, icon: Icon }, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md shadow-gray-500 dark:shadow-gray-950 flex flex-col items-center"
              data-aos="flip-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-sky-600/20 text-sky-700 dark:bg-sky-500/20 dark:text-sky-400 mb-4 p-2">
                <Icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
