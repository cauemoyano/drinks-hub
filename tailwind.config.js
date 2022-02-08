module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EAE7DC",
          200: "#D8C3A5",
        },
        secondary: {
          100: "#E98074",
          200: "#E85A4F",
        },
        tertiary: {
          100: "#45A29E",
        },
        neutral: {
          light: "#FCFAF2",
          grey: "#8E8D8A",
          dark: "#45433C",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        headings: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};