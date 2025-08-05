/**
 * StorySection introduces the origins of TaxAdvin and sets the tone for the
 * About page.  It focuses on how the firm came to be, emphasising the
 * founder's experience and commitment to serving Florida's individuals,
 * businesses and nonprofits.  The content draws on the biography of
 * Ashraf Abdeltawab:contentReference[oaicite:1]{index=1} and frames it in a narrative
 * suitable for an about page.
 */
export const StorySection = () => {
  return (
    <section className="py-8 px-6 lg:px-8 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 dark:text-sky-300 mb-6">
          Our Story
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          TaxAdvin was born from a simple idea: to provide Florida's
          individuals, small businesses and nonprofits with trustworthy,
          proactive guidance in the ever-changing world of tax and finance.
          After more than two decades of working across public and private
          sectors, our founder, Ashraf Abdeltawab, saw the need for a firm that
          couples deep technical expertise with genuine care for clients'
          financial wellbeing. With a strong foundation in GAAP, financial
          accounting and strategic planning, Ashraf envisioned a service that
          would empower people to make sound decisions, minimise taxes and build
          lasting wealth.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Today TaxAdvin serves clients throughout Florida with the same
          principles on which it was founded: professionalism, responsiveness,
          integrity and innovation. We are proud to contribute to our
          community's economic health by guiding our neighbours through
          everything from straightforward tax preparation to complex financial
          strategies.
        </p>
      </div>
    </section>
  );
};
