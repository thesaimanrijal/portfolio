import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post not found" };

  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        &larr; Back to blog
      </Link>

      <h1 className="mt-8 text-4xl font-bold">{post.title}</h1>
      {post.date && (
        <p className="mt-3 text-sm text-gray-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      )}

      <div
        className="prose mt-10"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
