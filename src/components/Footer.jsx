import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Nazish Iftikhar. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
          <a
            href="https://github.com/Nazish-Iftikhar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nazish-iftikhar-ba2522304/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/thetechscroll5/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FiInstagram size={20} />
          </a>
          <a
            href="mailto:nazishiftikhar452@gmail.com"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}