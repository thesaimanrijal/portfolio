import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-6 p-6 border-b">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/research">Research</Link>
      <Link href="/cv">CV</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}