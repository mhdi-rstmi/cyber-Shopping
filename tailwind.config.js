/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dimGray: {
          50: "#DFDFDF",
          100: "#989898",
          200: "#656565",
        },
        primary: "#EDEDED",
        secondary: "#f6f6f6",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      laptop: "1186px",
    },
  },
  plugins: [],
};
