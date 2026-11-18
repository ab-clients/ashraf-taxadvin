import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-8 pb-10 px-4 lg:px-8 bg-gray-200 dark:bg-gray-900">
      <article className="max-w-3xl mx-auto bg-white dark:bg-gray-950 rounded-2xl shadow-md p-5 sm:p-8 text-sm text-gray-700 dark:text-gray-300 leading-normal">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {title}
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-5">
          Last updated: {updated}
        </p>
        <div className="space-y-2.5 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900 dark:[&_h2]:text-gray-100 [&_h2]:mt-5 [&_h2]:scroll-mt-24 [&_h3]:font-semibold [&_h3]:mt-1 [&_h3]:text-gray-900 dark:[&_h3]:text-gray-100 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-0.5 [&_a]:text-sky-600 dark:[&_a]:text-sky-400 [&_a]:underline">
          {children}
        </div>
      </article>
    </section>
  );
}
