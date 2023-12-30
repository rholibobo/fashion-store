/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css}", 
    "./app/**/*.{js,ts,jsx,tsx,css}"
  ],

  theme: {
    extend: {
      colors: {
        background: "#F4BF96",
        backgroundtext: "#F4BF96",
        textgray: "#989898",
        grayshade: "#8d7f77",
        textwhite: "#ffffff",
        textblack: "#000000",
        fauxblack: "#1F1717",
      },
      fontFamily:{
        'header': ['Playfair']
      }
    },
  },
  plugins: [],
};
