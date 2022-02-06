module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          01: "#EAE7DC",
          01: "#D8C3A5",
        },
        secondary: {
          01: "#E98074",
          02: "#E85A4F",
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
