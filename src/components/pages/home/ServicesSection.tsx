import { serviceDetails } from "@/data/servcies";

export const ServicesSection = () => {
  const filteredServices = serviceDetails.filter(
    (service) => service.showOnHomePage !== false
  );

  return (
    <section
      id="services"
      className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map(({ title, description, icon: Icon }, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="w-14 h-14 bg-sky-100 dark:bg-sky-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-sky-600 dark:text-sky-400" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
