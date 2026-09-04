import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on mathematics, machine learning, and whatever else has my attention.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Notes on things I&apos;m working through, rather than finished conclusions.
      </p>

      {posts.length === 0 ? (
        <p className="mt-10 text-gray-600 dark:text-gray-400">
          Nothing published yet.
        </p>
      ) : (
        <ul className="mt-10 flex flex-col gap-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold group-hover:underline">
                  {post.title}
                </h2>
                {post.date && (
                  <p className="mt-1 text-sm text-gray-500">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                )}
                {post.excerpt && (
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
