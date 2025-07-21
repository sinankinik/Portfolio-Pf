/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2b2b2b',
        secondary: '#FFB400',
        third: '#767676',
        darkprimary: '#1c1c1c',
        darksecondary: '#F78F42'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
    },
  },
  // 'plugins' anahtarı 'theme' objesinin dışında, ana konfigürasyon objesinin kökünde olmalıdır.
  plugins: [],
}