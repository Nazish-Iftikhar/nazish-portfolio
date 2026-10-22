import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'DecorVista - Interior Design Platform',
    desc: 'A full-stack interior design web app built with ASP.NET Core MVC & SQL Server. Features user authentication with email confirmation, product purchasing, gallery-based designer booking, and an admin panel.',
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'EF Core'],
    image: '/project1.jpg',
    liveLink: '#', 
    githubLink: 'https://github.com/Nazish-Iftikhar/DecorVista',
  },
  {
    title: 'EventSphere Management System',
    desc: 'A full-stack expo management system that streamlines event organization by enabling organizers, exhibitors, and attendees to manage registrations, booths, and schedules.',
    tags: ['MERN Stack', 'JavaScript', 'React', 'Node.js'],
    image: '/project2.jpg',
    liveLink: '#', 
    githubLink: 'https://github.com/Nazish-Iftikhar/EventSphereManagement_MernStackProject',
  },
  {
    title: 'AI Heart Disease Predictor',
    desc: 'AI-Powered Heart Disease Detection System using Python, Flask, Gemini AI & MongoDB. Analyzes 13 clinical parameters to predict cardiovascular risk with 92%+ accuracy.',
    tags: ['Python', 'Flask', 'Machine Learning', 'Gemini AI'],
    image: '/project3.jpg',
    liveLink: '#', 
    githubLink: 'https://github.com/Nazish-Iftikhar/ai-heart-disease-predictor',
  },
  {
    title: 'Student Progress System (AI)',
    desc: 'A Flask + MongoDB web application for tracking marks, attendance, and predicting student performance using Machine Learning (Linear Regression).',
    tags: ['Flask', 'MongoDB', 'Scikit-Learn', 'Python'],
    image: '/project4.jpg',
    liveLink: '#', 
    githubLink: 'https://github.com/Nazish-Iftikhar/student-progress-system',
  },
  {
    title: 'Aura Furniture App',
    desc: 'A beautiful, minimalist furniture store app built with Flutter. Features user authentication, wishlist, cart management, and per-user data persistence with a clean UI.',
    tags: ['Flutter', 'Dart', 'Mobile App'],
    image: '/project5.jpg',
    liveLink: '#', 
    githubLink: 'https://github.com/Nazish-Iftikhar/aura-furniture-app',
  },
  {
    title: 'BabyShop Hub',
    desc: 'A comprehensive Flutter e-commerce mobile application for baby products with real-time chat, admin panel, user authentication, diet plans, and complete shopping experience.',
    tags: ['Flutter', 'Dart', 'Firebase', 'E-Commerce'],
    image: '/project6.jpg',
    liveLink: '#', 
    githubLink: 'https://github.com/Nazish-Iftikhar/BabyShop-Hub',
  },
  {
    title: 'Surah Reader App',
    desc: 'A beautiful Flutter Quran app with bookmarking, progress tracking, and offline support. Read the Holy Quran with ease and track your spiritual journey.',
    tags: ['Flutter', 'Dart', 'Offline Support'],
    image: '/project7.jpg',
    liveLink: '#', 
    githubLink: 'https://github.com/Nazish-Iftikhar/surah-reader-app',
  },
  {
    title: 'Expense Tracker',
    desc: 'A simple and responsive Expense Tracker built with HTML, CSS & JavaScript, featuring income/expense tracking, automatic balance calculation, and Local Storage.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    image: '/project10.jpg',
    liveLink: '#', 
    githubLink: 'https://github.com/Nazish-Iftikhar/expense-tracker',
  },
  {
    title: 'YouTube Homepage Clone',
    desc: 'A static replica of the YouTube homepage interface built using pure HTML and CSS, focusing on layout accuracy and responsive design.',
    tags: ['HTML', 'CSS', 'UI Design'],
    image: '/project11.jpg',
    liveLink: '#', 
    githubLink: 'https://github.com/Nazish-Iftikhar/youtube-homepage',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-2">Projects</p>
            <h2 className="heading-display text-3xl sm:text-4xl font-semibold">Selected work</h2>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
            A showcase of my recent web, mobile, and AI/ML application projects, ranging from full-stack platforms to responsive front-end interfaces.
          </p>
        </motion.div>

        {/* Grid layout for projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, index) => (
            <motion.article 
              key={p.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 overflow-hidden hover:shadow-xl hover:border-violet-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-gradient-to-tr', 'from-violet-500/20', 'to-fuchsia-500/20');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-grow line-clamp-3">
                  {p.desc}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-auto">
                  <a 
                    href={p.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <FiGithub size={16} /> Source
                  </a>
                  {p.liveLink !== '#' && (
                    <a 
                      href={p.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors ml-auto"
                    >
                      <FiExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}