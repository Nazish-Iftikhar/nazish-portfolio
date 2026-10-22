import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800'
          : 'bg-transparent'}`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        <a href="#home" className="font-display text-xl font-semibold tracking-tight">
          Nazish Iftikhar<span className="text-violet-600 dark:text-violet-400">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-600 hover:text-violet-600
                         dark:text-zinc-300 dark:hover:text-violet-400 transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href="/Nazish_Iftikhar_Resume.pdf"
            download="Nazish_Iftikhar_Resume.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full
                       px-3 py-1.5 border border-violet-500/40 text-violet-600
                       hover:bg-violet-600 hover:text-white
                       dark:text-violet-300 dark:hover:bg-violet-500 dark:hover:text-zinc-950
                       transition-colors"
          >
            <FiDownload size={14} /> Resume
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800
                        bg-white dark:bg-zinc-950">
          <div className="section-container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-zinc-700 dark:text-zinc-300
                           hover:text-violet-600 dark:hover:text-violet-400"
              >
                {l.label}
              </a>
            ))}

            <a
              href="/Nazish_Iftikhar_Resume.pdf"
              download="Nazish_Iftikhar_Resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full
                         bg-violet-600 text-white px-4 py-2 text-sm font-medium
                         dark:bg-violet-500 dark:text-zinc-950"
            >
              <FiDownload size={16} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}