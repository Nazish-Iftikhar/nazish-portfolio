import { motion } from 'framer-motion';

const education = [
  { title: 'Advanced Diploma in Software Engineering', place: 'Aptech Learning Pakistan', period: '2023 — 2026' },
  { title: 'Intermediate in Pre-Engineering', place: 'Govt Degree College for Women', period: '2022 — 2023' },
  { title: 'Matriculation', place: 'Asghar Crescent Grammar School', period: '2021' },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-zinc-50 dark:bg-zinc-900/30 overflow-hidden">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-2">Education</p>
          <h2 className="heading-display text-3xl sm:text-4xl font-semibold">Academic background</h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((e, index) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:border-violet-500/30 transition-colors duration-300"
            >
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{e.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.place}</p>
              </div>
              <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">{e.period}</span>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-sm text-zinc-500 dark:text-zinc-400"
        >
          Languages: English, Urdu
        </motion.p>
      </div>
    </section>
  );
}