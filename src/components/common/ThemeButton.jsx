import { FaMoon, FaSun } from 'react-icons/fa';
import useTheme from '../../hooks/useTheme';

function ThemeButton() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
}

export default ThemeButton;
