/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0B0B',
          card: '#141414',
          accent: '#3B82F6', // Azul royal do 'Jesus is King'
          gold: '#D4AF37',
          cream: '#F4F1EA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}