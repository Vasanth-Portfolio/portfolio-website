import { useEffect, useState, Dispatch, SetStateAction } from 'react';

const useThemeSwitcher = (): [string, Dispatch<SetStateAction<string>>] => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes first to be safe
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useThemeSwitcher;
