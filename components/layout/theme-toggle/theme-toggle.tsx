import { useTheme } from 'next-themes';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export const ThemeToggle = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const activeTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(activeTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-lg border border-current"
      aria-label="Toggle Theme"
    >
      {activeTheme === 'dark' ? (
        <BsMoon name="Dark Theme" />
      ) : (
        <BsSun name="Light Theme" />
      )}
    </button>
  );
};
