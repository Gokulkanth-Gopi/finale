"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Force light theme site-wide by removing any 'dark' class on mount.
    const initialTheme: Theme = 'light';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initialTheme);
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    return () => undefined;
  }, []);

  const toggleTheme = () => {
    // Toggle is intentionally disabled; keep site in light mode for consistency.
    setTheme('light');
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
