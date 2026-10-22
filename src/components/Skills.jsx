import { motion } from 'framer-motion';

const skillGroups = [
  { title: 'Languages', items: ['C#', 'Python', 'PHP', 'JavaScript', 'Dart', 'HTML5', 'CSS3'] },
  { title: 'Frameworks & Libraries', items: ['ASP.NET Core', 'Flask', 'Laravel', 'ReactJS', 'Angular CLI', 'jQuery', 'Flutter', 'Bootstrap'] },
  { title: 'Concepts', items: ['Full-stack Web Dev', 'RESTful APIs', 'Responsive UI', 'Cross-platform Mobile', 'MVC Architecture'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900/30 overflow-hidden">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-2">Skills</p>
          <h2 className="heading-display text-3xl sm:text-4xl font-semibold">Tools I work with</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((g, index) => (
            <motion.div 
              key={g.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-semibold mb-4 text-zinc-900 dark:text-zinc-100">{g.title}</h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}