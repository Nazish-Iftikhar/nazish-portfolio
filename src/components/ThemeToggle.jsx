import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700
                 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}