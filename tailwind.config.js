module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pesak: {
          400: "#2A0E0A",
          300: "#732C1D",
          DEFAULT: "#FE7F48",
          150: "#CC663A",
          100: "#FFBFA4",
        },

        trava: {
          400: "#374123",
          DEFAULT: "#4F613A",
          200: "#7B896B",
          100: "#A7B09D",
        },

        krem: {
          DEFAULT: "#EEE7D7",
        },
      },
      height: {
        visina: "45rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
