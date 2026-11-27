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
          'sand': '#E4DAC9',
          'linen': '#D8CCB8',
          'parchment': '#EDE5D8',
          'espresso': '#1C1814',
          'ink': '#181512',
          'umber': '#3A3128',
          'gold': '#C6A15B',
          'gold-ink': '#7A5B22',
          'border': '#C4B69F',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'editorial': '0 20px 48px -20px rgba(24, 21, 18, 0.26)',
        'soft': '0 8px 24px -10px rgba(24, 21, 18, 0.12)',
        'card-hover': '0 14px 32px -14px rgba(24, 21, 18, 0.18)',
      },
    },
  },
  plugins: [],
};
