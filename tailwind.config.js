/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C4EE4',
        secondary: '#333333',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1300px',
      xl: '1280px',
    },
  },
  plugins: [],
}