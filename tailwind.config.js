/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      transitionDuration: {
        // DEFAULT: "200ms",
      },
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        html: {
          fontSize: "16px", // default
          "@media (max-width: 1536px)": { fontSize: "15px" }, // max 2xl
          "@media (max-width: 1280px)": { fontSize: "14px" }, // max xl
          "@media (max-width: 1024px)": { fontSize: "12px" }, // max lg
          "@media (max-width: 768px)": { fontSize: "10px" }, // max md
          "@media (max-width: 450px)": { fontSize: "9px" }, // phone screen
        },
        ".container": {
          marginBlock: "2rem",
        },
        // ".flex-center": {
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        // },
        // ".stretched-link": {
        //   "&::after": {
        //     content: "''",
        //     position: "absolute",
        //     inset: "0",
        //     zIndex: "1",
        //   },
        // },
      });
    },
  ],
  corePlugins: {
    textOpacity: false,
    ringOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    backdropOpacity: false,
    backgroundOpacity: false,
    placeholderOpacity: false,
  },
};

