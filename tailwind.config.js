/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./src/_includes/**/*.njk",
    "./src/_layouts/**/*.njk"
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f4f7f4',
          100: '#e6eee6',
          200: '#d0dfd0',
          300: '#b3c9b3',
          400: '#8fad8f',
          500: '#729072',
          600: '#5a735a',
          700: '#495c49',
          800: '#3d4a3d',
          900: '#333e33',
        },
        'lavender': {
          50: '#f7f6fa',
          100: '#eeeaf4',
          200: '#dfd6e9',
          300: '#c7b8d9',
          400: '#a893c3',
          500: '#8f6eac',
          600: '#7d5594',
          700: '#664578',
          800: '#553a63',
          900: '#473252',
        },
        'cream': {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f5ebd6',
          300: '#eed9b3',
          400: '#e4c088',
          500: '#d9a55d',
          600: '#c88c3f',
          700: '#a67033',
          800: '#855a2c',
          900: '#6c4a28',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Lora', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
} 