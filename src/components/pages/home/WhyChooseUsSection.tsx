import React from "react";
import { whyChooseUsData } from "@/data/home/whyChooseUsData";

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
          Why Choose TaxAdvin?
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300 mx-auto text-center">
          We blend professional expertise with personalized service to deliver
          financial peace of mind. Here’s what sets us apart.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsData.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm dark:bg-gray-900 dark:border dark:border-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 mb-4">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
