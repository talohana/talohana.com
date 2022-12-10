import { useMounted } from '@/hooks/useMounted';
import { useTheme } from 'next-themes';
import { BsMoon, BsSun } from 'react-icons/bs';

export const ThemeToggle = () => {
  const mounted = useMounted();
  const { theme, systemTheme, setTheme } = useTheme();
  const activeTheme = theme === 'system' ? systemTheme : theme;
  const toggleTheme = () => setTheme(activeTheme === 'dark' ? 'light' : 'dark');

  return mounted ? (
    <button
      onClick={toggleTheme}
      className="text-xl p-1.5 rounded-lg border border-primary-300 border-opacity-60"
      aria-label="Toggle Theme"
    >
      {activeTheme === 'dark' ? (
        <BsMoon name="Dark Theme" />
      ) : (
        <BsSun name="Light Theme" />
      )}
    </button>
  ) : null;
};
