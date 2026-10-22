/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        ink: {
          light: '#0f0f10',
          dark: '#f5f5f4',
        },
        accent: {
          light: '#6d28d9',
          dark: '#a78bfa',
        },
        surface: {
          light: '#ffffff',
          dark: '#0b0b0f',
        },
        muted: {
          light: '#f4f4f5',
          dark: '#16161c',
        },
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite', // Circle ghoomne ki speed
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};