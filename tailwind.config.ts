import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03a688',
        'primary-dark': '#058a7a',
        accent: '#0b8a72',
        surface: '#f4fbfb',
        border: '#dde7e7',
      },
      boxShadow: {
        soft: '0 20px 80px rgba(3, 166, 136, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
