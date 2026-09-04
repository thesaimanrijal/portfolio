import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Reading and work in progress on the mathematics behind machine learning.",
};

export default function Research() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Research</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Interests, reading, and work in progress.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold border-b pb-2">Interests</h2>
        <ul className="mt-6 flex flex-col gap-3 text-lg text-gray-700 dark:text-gray-300">
          <li>The mathematics underneath machine learning — optimisation, linear algebra, and why methods work rather than only that they do.</li>
          <li>Intelligent systems, and the gap between a method that holds on paper and one that survives noisy data.</li>
          <li>Data analysis as practised, including the parts that don&apos;t appear in the write-up.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold border-b pb-2">Publications</h2>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          Nothing published yet. When there is, it will be listed here.
        </p>
      </section>
    </div>
  );
}
