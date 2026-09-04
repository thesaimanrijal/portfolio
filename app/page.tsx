import Image from "next/image";

export default function Home() {
  return (

    <div className="max-w-3xl mx-auto px-6 py-16">

      <div className="flex justify-between items-start gap-8">
        <div>
          <h1 className="text-4xl font-bold">Shane Saiman Rijal</h1>
          <p className="mt-3 text-gray-400">
            Information and Intelligent Systems Engineering
          </p>
          <p className="text-gray-400">
            Thapathali Campus, Tribhuvan University
          </p>
        </div>

        <Image
          src="/profile.png"
          alt="Saiman Rijal"
          width={160}
          height={160}
          className="rounded-lg"
        />
      </div>

      <p className="mt-8 text-gray-300 leading-relaxed">
        Write two or three sentences here about what you do and what
        you're interested in.
      </p>

      <div className="mt-6 flex gap-6">
        <a href="https://github.com/thesaimanrijal" className="text-blue-400 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" className="text-blue-400 hover:underline">LinkedIn</a>
        <a href="mailto:thesaimanrijal@gmail.com" className="text-blue-400 hover:underline">Email</a>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold border-b pb-2">About</h2>
        <p className="mt-6 text-gray-300 leading-relaxed">
          Longer paragraph here.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Second paragraph.
        </p>
      </section>

    </div>
  );
}