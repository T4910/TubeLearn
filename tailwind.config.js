/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "pinkDark":"#9C4DF4",
        "lightGrey":"#5D5A6F",
        "purpleDark":"#0A033C",
        "orangeDark":"#FF6652",
        "strokeGrey":"#DEDDE4",
        "lighterGrey": "#F0EEF3", //"#F7F5FA",
      },
      fontFamily:{
        sans : ['var(--font-noto-sans)'], //['Noto Sans', 'sans-serif'],
        inter : ['var(--font-inter)'], //['Inter', 'sans-serif'],
        paytone : ['var(--font-paytone-one)'],// ['Paytone One', 'sans-serif']
      }
    },
  },
  plugins: [],
}
