/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ncpor: {
          navy: '#0B192C',
          deep: '#1E3A8A',
          ice: '#E0F2FE',
          sky: '#BAE6FD',
          teal: '#0D9488',
          cyan: '#14B8A6',
          light: '#F8FAFC',
          dark: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
