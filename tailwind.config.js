/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2b2b2b',
        secondary: '#FFB400',
        third: '#767676'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
    },
    plugins: [],
  }
}