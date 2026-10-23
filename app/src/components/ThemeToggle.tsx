import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

const current = (): Theme =>
  document.documentElement.classList.contains('light') ? 'light' : 'dark';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(current);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      aria-pressed={theme === 'light'}
      title={`Switch to ${next} mode`}
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-surface text-ink border border-ink/15 flex items-center justify-center shadow-sm transition-colors hover:bg-raise focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" aria-hidden /> : <Moon className="w-5 h-5" aria-hidden />}
    </button>
  );
};

export default ThemeToggle;
