module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      green: "#1AB3AC",
      grey: "#D9D9D9",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Arial", "sans-serif"],
    },
    borderRadius: {
      none: "0",
      default: "10px",
    },
    extend: {
      padding: {
        10: "10px",
      },
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none",
      },
    },
  },
  corePlugins: {
    borderRadius: true,
  },
  plugins: [],
};
