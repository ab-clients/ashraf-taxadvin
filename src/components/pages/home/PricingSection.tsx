const pricingPlans = [
  {
    title: "Individual Tax Returns",
    price: "$275+",
    note: "",
    features: [
      "1040 federal & applicable state filings",
      "Free e‑file & extension requests",
      "Audit/troubleshooter support",
    ],
    link: "/pricing#individual",
  },
  {
    title: "Small Business Plans",
    price: "$209/mo*",
    note: "Billed annually",
    features: [
      "Dedicated accountant & Client Portal access",
      "Quarterly tax reviews & advisory calls",
      "Monthly bookkeeping & financial reporting",
    ],
    link: "/pricing#business",
  },
  {
    title: "Core Accounting (Most Popular)",
    price: "$249/mo*",
    note: "Billed annually",
    features: [
      "Everything in Business Plan & more",
      "Customized tax filing for all entity types",
      "Audit support & automatic payroll setup",
    ],
    link: "/pricing#core",
  },
];

export const PricingSection = () => (
  <section className="py-16 px-6 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
        Simple Flat‑Fee Packages
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
        No surprises at tax time—choose a plan that fits your needs and budget.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-4xl font-bold">{plan.price}</p>
            {plan.note && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {plan.note}
              </p>
            )}
            <ul className="mt-6 text-sm text-gray-600 dark:text-gray-300 space-y-2 flex-grow">
              {plan.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={plan.link}
              className="mt-8 inline-block px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 self-center"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
        * Based on flat‑fee pricing for Florida clients—as low as $209/month for
        business accounting plans
      </p>
    </div>
  </section>
);
