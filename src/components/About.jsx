import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container"
      >
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-2">
              About
            </p>
            <h2 className="heading-display text-3xl sm:text-4xl font-semibold">
              A developer who values clarity & ownership.
            </h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I'm a full stack developer who enjoys working across the stack — building responsive
              front-end interfaces with React and Angular, developing structured back-end services
              and APIs with C#/ASP.NET Core, Python/Flask and Laravel, and extending into
              cross-platform mobile development with Flutter.
            </p>
            <p>
              A fast learner with a strong sense of ownership and attention to detail, I'm seeking to
              contribute to a collaborative engineering team and grow into a well-rounded software
              developer.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {['C#', 'ASP.NET Core', 'Python', 'Laravel', 'React', 'Angular', 'Flutter', 'Git'].map((t) => (
                <span key={t} className="rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900/40">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}