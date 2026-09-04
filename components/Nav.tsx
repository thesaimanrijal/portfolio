import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/research", label: "Research" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/contact", label: "Contact Me" },
];

export default function Nav() {
  return (
    <nav className="flex justify-end gap-6 p-6 border-b">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}