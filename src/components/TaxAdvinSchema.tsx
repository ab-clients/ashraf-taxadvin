export default function TaxAdvinSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "TaxAdvin Financial Services",
    description:
      "Comprehensive tax and accounting services for individuals, small businesses and nonprofits across Florida – available locally or online.",
    url: "https://taxadvin.com/",
    logo: "https://taxadvin.com/apple-touch-icon.png",
    telephone: "+1-407-726-7901",
    email: "contact@taxadvin.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13732 Eden Isle Blvd",
      addressLocality: "Windermere",
      addressRegion: "FL",
      postalCode: "34786",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Florida",
    },
    availableLanguage: ["English", "Arabic"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Ashraf Abdeltawab",
      jobTitle: "CPA",
      description:
        "Founder and licensed Certified Public Accountant with more than two decades of experience in GAAP, financial accounting and strategic planning.",
    },
    serviceType: [
      "Tax preparation and planning",
      "Bookkeeping and QuickBooks",
      "Payroll and compliance",
      "Nonprofit and specialty accounting",
      "Business advisory",
      "Estate and trust planning",
      "Tax resolution and audit defense",
      "Virtual CFO and strategic financial leadership",
      "Entity formation and tax structuring",
      "International tax compliance and planning",
      "Succession planning and M&A advisory",
    ],
  };

  return (
    <script
      id="taxadvin-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
