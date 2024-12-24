/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0f0f0f",
        secodary:"#191919",
        background:"#0f0f0f",
        border:"#252527",
        button:"#22c55e"
      }

    },
  },
  plugins: [],
}