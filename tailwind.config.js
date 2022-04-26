module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "481px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          100: "#EAE7DC",
          200: "#D8C3A5",
        },
        secondary: {
          100: "#E98074",
          200: "#E85A4F",
          300: "#de2b01",
        },
        tertiary: {
          100: "#00817d",
          200: "#003634",
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
      /* screens: {
        xs: "481px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      }, */
    },
  },
  plugins: [],
};
