import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to get in touch.",
};

const links = [
  {
    label: "Email",
    value: "thesaimanrijal@gmail.com",
    href: "mailto:thesaimanrijal@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/thesaimanrijal",
    href: "https://github.com/thesaimanrijal",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
  },
];

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Email is the surest way to reach me. I still write letters by hand, so a
        slow reply is a feature rather than a fault.
      </p>

      <dl className="mt-12 flex flex-col gap-6">
        {links.map((link) => (
          <div key={link.label}>
            <dt className="text-sm uppercase tracking-wide text-gray-500">
              {link.label}
            </dt>
            <dd className="mt-1 text-lg">
              <a
                href={link.href}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {link.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
