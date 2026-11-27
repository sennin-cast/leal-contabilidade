/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        integra: {
          'off-white': '#F8F6F0',
          'beige': '#E9E3D9',
          'greige': '#B7AEA1',
          'gold': '#C2A36A',
          'gold-aged': '#94743E',
          'brown': '#5C4A33',
          'brown-soft': '#766044',
          'graphite': '#34322F',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'editorial': '0 18px 45px -20px rgba(52, 50, 47, 0.14)',
        'soft': '0 8px 24px -10px rgba(52, 50, 47, 0.08)',
        'card-hover': '0 14px 32px -14px rgba(52, 50, 47, 0.12)',
      },
    },
  },
  plugins: [],
};
