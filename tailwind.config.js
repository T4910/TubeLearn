/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        "pinkDark":"#9C4DF4",
        "lightGrey":"#5D5A6F",
        "purpleDark":"#0A033C",
        "orangeDark":"#FF6652",
        "lighterGrey":"#F7F5FA",
        "strokeGrey":"#DEDDE4"
      },
      fontFamily:{
        "sans-noto":['Noto Sans', 'sans-serif'],
        "inter":['Noto Sans', 'sans-serif'],
        'paytone':['Paytone One', 'sans-serif']
      }
    },
  },
  plugins: [],
}
