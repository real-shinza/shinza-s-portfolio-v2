'use client';

import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label='Toggle theme'
      className='relative h-6.5 w-12 rounded-full border border-border bg-bg cursor-pointer'
    >
      <span
        className={`
          absolute top-[2px] left-[2px]
          h-5 w-5 rounded-full bg-text
          transition-transform duration-200
          translate-x-0 dark:translate-x-5
        `}
      />
    </button>
  );
};
