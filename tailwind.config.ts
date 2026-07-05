import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        bone: '#fbfaf7',
        paper: '#ffffff',
        slate: '#525252',
        line: 'rgba(10, 10, 10, 0.1)',
        ember: '#ff6b35',
        mint: '#86efac',
        sky: '#93c5fd',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(10, 10, 10, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
