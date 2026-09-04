import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

export type Post = PostMeta & { contentHtml: string };

// YAML turns an unquoted `date: 2026-09-04` into a Date object, which React
// refuses to render. Normalise both spellings to a plain ISO day string.
function toDateString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value;
  return "";
}

export function formatDate(date: string): string {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function readPostFile(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  return matter(fs.readFileSync(fullPath, "utf8"));
}

function toMeta(slug: string, data: Record<string, unknown>): PostMeta {
  return {
    slug,
    title: (data.title as string) || slug,
    date: toDateString(data.date),
    excerpt: data.excerpt as string | undefined,
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => toMeta(slug, readPostFile(slug)!.data))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const file = readPostFile(slug);
  if (!file) return null;

  const processed = await remark().use(html).process(file.content);

  return {
    ...toMeta(slug, file.data),
    contentHtml: processed.toString(),
  };
}
