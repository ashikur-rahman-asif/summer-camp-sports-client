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
              green: '#097969',
              'dark-grey': '#151515',
              'dark-blue': '#0F1729',
          },
      },
  },
  plugins: [require("daisyui")],
}

