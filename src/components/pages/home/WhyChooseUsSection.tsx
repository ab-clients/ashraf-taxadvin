import React from "react";
import { whyChooseUsData } from "@/data/home/whyChooseUsData";

export const WhyChooseUsSection = () => {
  const getIconBgColor = (index: number) => {
    const colors = [
      "bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400",
      "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400",
      "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
      "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
      "bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-400",
      "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose TaxAdvin?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            More than a tax firm — we provide full financial department
            supervision and streamlined operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsData.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`w-16 h-16 ${getIconBgColor(index)} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
