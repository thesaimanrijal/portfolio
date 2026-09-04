import Image from "next/image";

export default function Home() {
  return (

    <div className="max-w-3xl mx-auto px-6 py-16">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 sm:gap-8">
        <div>
          <h1 className="text-5xl font-bold">Shane Saiman Rijal</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Information and Intelligent Systems Engineering
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Thapathali Campus, Tribhuvan University
          </p>
        </div>

        <Image
          src="/profile.png"
          alt="Saiman Rijal"
          width={160}
          height={160}
          className="rounded-lg w-28 h-28 sm:w-40 sm:h-40 object-cover"
        />
      </div>

      <p className="mt-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Engineering graduate with a background in mathematics, working in data analysis. Interested in AI, intelligent systems, and the mathematics that makes machines learn. I studied engineering, work with data, and spend my spare time understanding the mathematics behind machine learning.
      </p>

      <div className="mt-6 flex gap-6">
        <a href="https://github.com/thesaimanrijal" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
        <a href="mailto:thesaimanrijal@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">Email</a>
      </div><section className="mt-16">
  <h2 className="text-3xl font-semibold border-b pb-2">About</h2>

  <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
    I studied Information and Intelligent Systems Engineering at Thapathali
    Campus, Tribhuvan University. What pulled me toward it was the
    mathematics. Engineering is one of the few places where abstract ideas
    have to survive contact with something real — where a proof that works
    on paper still has to hold up against noisy data and hardware that
    doesn&apos;t care about your assumptions. I&apos;ve never lost interest
    in watching that collision happen.
  </p>

  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
    Most of what I find interesting sits underneath the surface. It&apos;s
    easy to use a model without understanding it, and for a while that&apos;s
    enough. But the moment something breaks, the difference between people
    who know what the method is actually doing and people who don&apos;t
    becomes very stark. I&apos;d rather be in the first group, which means
    accepting that learning properly is slower than learning quickly.
  </p>

  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
    Away from all that, I read — mostly classics, and mostly Tolstoy.
    <i> War and Peace</i> and <i>Anna Karenina</i> are books I keep coming
    back to, and each time I find something I was too young or too impatient
    to notice before. There&apos;s a particular thing Tolstoy does where an
    enormous historical machinery is running in the background while someone
    is quietly making a terrible decision about their own life, and both feel
    equally important. I don&apos;t think I&apos;ve read anyone else who
    holds those two scales at once as well.
  </p>

  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
    Music runs alongside everything else. Bach and Chopin when I need to
    think — Bach for structure, Chopin for when structure isn&apos;t what I
    need. And then John Prine, who wrote plainly about ordinary people in a
    way that most serious writers never manage. I play guitar too, badly but
    often, and I&apos;ve made peace with the fact that those two things
    aren&apos;t going to change.
  </p>

  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
    I keep a journal, and I still write letters by hand. Both are slower than
    they need to be, which is exactly why I do them. Writing something down
    forces a kind of honesty that thinking about it doesn&apos;t — you find
    out fairly quickly whether you actually had a thought or just a feeling
    about one. Letters do something similar. Knowing that someone will read
    it, days later, changes what you&apos;re willing to say and how carefully
    you say it.
  </p>

  <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
    This site is partly a place to put that writing, and partly an excuse to
    build something from scratch and understand every piece of it.
  </p>
</section>

        
      

      

      </div>
  );
}
