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
      className="text-2xl"
      aria-label="Toggle Theme"
    >
      {activeTheme === 'dark' ? <BsMoon /> : <BsSun />}
    </button>
  );
};
