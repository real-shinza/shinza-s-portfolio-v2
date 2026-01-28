import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        shadow: 'var(--shadow)',
        border: 'var(--border)',
      },
      animation: {
        'slide-fade-in-left': 'slide-fade-in-left 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
      },
      keyframes: {
        'slide-fade-in-left': {
          '0%': {
            transform: 'scaleX(0)',
            'transform-origin': '0% 0%',
          },
          '100%': {
            transform: 'scaleX(1)',
            'transform-origin': '0% 0%',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
