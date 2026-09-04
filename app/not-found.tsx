import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Not found</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        That page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-blue-600 dark:text-blue-400 hover:underline"
      >
        &larr; Back home
      </Link>
    </div>
  );
}
