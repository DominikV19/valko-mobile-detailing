/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0D10',
        'ink-2': '#15181D',
        'ink-3': '#1F2329',
        accent: '#1450BE',
        'accent-glow': '#3B7AE0',
        bone: '#EAECEE',
        muted: '#8A929B',
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.02em',
      },
      maxWidth: {
        page: '1280px',
      },
    },
  },
  plugins: [],
};
