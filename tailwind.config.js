/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            950: '#070D16',
            900: '#0D1B2A',
            850: '#112236',
            800: '#162842',
            700: '#1B263B',
            600: '#273854',
            500: '#3A4F72',
          },
          gold: {
            200: '#F2E5C2',
            300: '#E5D196',
            400: '#D4AF37',
            500: '#C5A869', // Cor mestre do logotipo
            600: '#AA8C4B',
            700: '#8A6F33',
            800: '#644F20',
          },
          cobalt: {
            400: '#60A5FA',
            500: '#2563EB',
            600: '#1D4ED8',
            700: '#1E40AF',
          },
          emerald: {
            400: '#34D399',
            500: '#10B981',
            600: '#059669',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #DFBA53 0%, #C5A869 50%, #F5E5B8 100%)',
        'navy-card': 'linear-gradient(180deg, rgba(22, 40, 66, 0.7) 0%, rgba(13, 27, 42, 0.9) 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(197, 168, 105, 0.15) 0%, rgba(13, 27, 42, 0) 70%)',
      },
      boxShadow: {
        'gold': '0 0 25px -5px rgba(197, 168, 105, 0.25)',
        'gold-lg': '0 10px 40px -10px rgba(197, 168, 105, 0.35)',
        'card-dark': '0 20px 50px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
