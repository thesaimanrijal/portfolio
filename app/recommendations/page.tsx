import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommendations",
  description: "Books and music worth the time — mostly Tolstoy, Bach, Chopin, and John Prine.",
};

const books = [
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    note: "An enormous historical machinery runs in the background while someone quietly makes a terrible decision about their own life, and both feel equally important.",
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    note: "Worth re-reading. Each time there is something I was too young or too impatient to notice before.",
  },
];

const music = [
  { name: "Bach", note: "For when I need structure to think against." },
  { name: "Chopin", note: "For when structure isn't what I need." },
  {
    name: "John Prine",
    note: "Wrote plainly about ordinary people in a way most serious writers never manage.",
  },
];

export default function Recommendations() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">Recommendations</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Things I keep coming back to.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold border-b pb-2">Books</h2>
        <ul className="mt-6 flex flex-col gap-6">
          {books.map((book) => (
            <li key={book.title}>
              <h3 className="text-xl font-semibold">
                <i>{book.title}</i>
              </h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {book.note}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold border-b pb-2">Music</h2>
        <ul className="mt-6 flex flex-col gap-6">
          {music.map((entry) => (
            <li key={entry.name}>
              <h3 className="text-xl font-semibold">{entry.name}</h3>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {entry.note}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
