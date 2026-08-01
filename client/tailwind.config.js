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
          50: '#f0f6ff',
          100: '#e0edff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        darkbg: '#0B0F17',
        darkcard: 'rgba(17, 24, 39, 0.7)',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
