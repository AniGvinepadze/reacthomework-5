/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        movieImg: "url('./assets/Image Container (1).png')",
        movieImgS: "url('./assets/Image Container (3).png')",
        movieImgT: "url('./assets/Image Container.png')",
        movieImgF: "url('./assets/Image Container@2x.png')",
        fadeout: "url('.my-project/src/assets/Fade Out Top.png')",
        movieImgFF:"url('./assets/Background Images.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: {'max':'768px'},
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
