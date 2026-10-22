import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-3 font-semibold">
              Full Stack Developer
            </p>
            
            <h1 className="heading-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] mb-6">
              Hi, I'm <span className="text-violet-600 dark:text-violet-400">Nazish Iftikhar</span>.
              <br />
              I build clean, scalable web experiences.
            </h1>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              Motivated and detail-oriented developer with hands-on experience across the .NET,
              Python, PHP/Laravel and JavaScript ecosystems — from responsive front-ends in React and
              Angular to structured back-end services and cross-platform mobile apps with Flutter.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary hover:-translate-y-1 transition-transform duration-300">
                <FiMail size={16} /> Let's talk
              </a>
              <a href="/Nazish_Iftikhar_Resume.pdf" download="Nazish_Iftikhar_Resume.pdf" className="btn-outline hover:-translate-y-1 transition-transform duration-300">
                <FiDownload size={16} /> Download Resume
              </a>
              <a href="#projects" className="btn-outline hidden sm:inline-flex hover:-translate-y-1 transition-transform duration-300">
                View projects <FiArrowDown size={16} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-10 text-zinc-500 dark:text-zinc-400">
              <a href="https://github.com/Nazish-Iftikhar" target="_blank" rel="noreferrer" className="hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:scale-110"><FiGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/nazish-iftikhar-ba2522304/" target="_blank" rel="noreferrer" className="hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:scale-110"><FiLinkedin size={22} /></a>
              <a href="https://www.instagram.com/thetechscroll5/?hl=en" target="_blank" rel="noreferrer" className="hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:scale-110"><FiInstagram size={22} /></a>
              <a href="mailto:nazishiftikhar452@gmail.com" className="hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:scale-110"><FiMail size={22} /></a>
            </div>
          </motion.div>

          {/* Right: Profile Picture with Rotating Ring */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative group flex items-center justify-center">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-400 to-indigo-500 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Rotating Circle */}
              <div className="absolute w-[105%] h-[105%] rounded-full border-2 border-dashed border-violet-500/50 animate-spin-slow" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl z-10">
                <img src="/profile.jpeg" alt="Nazish Iftikhar" className="w-full h-full object-cover" loading="eager" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}