/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-prime": "#44464d",
        gray: {
          "100": "#fafafa",
          "200": "#838383",
        },
        white: "#fff",
        darkslategray: {
          "100": "rgba(68, 70, 77, 0.7)",
          "200": "rgba(68, 70, 77, 0.9)",
        },
        "grey-25": "rgba(68, 70, 77, 0.1)",
        "green-link": "#00c5c0",
        "black-text": "#252525",
        black: "#000",
        "low-contrast-gre": "#a7a7a7",
        darkcyan: "#299b98",
        "white-prime": "#f9f9f9",
        "green-prime": "#1e7876",
        "white-prime-65": "rgba(249, 249, 249, 0.65)",
        darkturquoise: "rgba(0, 197, 192, 0.7)",
        whitesmoke: {
          "100": "rgba(249, 249, 249, 0.9)",
          "200": "rgba(249, 249, 249, 0.7)",
        },
        gainsboro: "#d9d9d9",
        "salmon-prime": "#d86a8d",
      },
      spacing: {},
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        lora: "Lora",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      base: "1rem",
      "45xl": "4rem",
      "21xl": "2.5rem",
      "39xl": "3.63rem",
      xs: "0.75rem",
      sm: "0.88rem",
      xl: "1.25rem",
      "5xl": "1.5rem",
      "17xl": "2.25rem",
      "29xl": "3rem",
      "9xl": "1.75rem",
      "77xl": "6rem",
      "53xl": "4.5rem",
      lg: "1.13rem",
      "5xl-1": "1.51rem",
      "35xl-1": "3.38rem",
      "9xl-3": "1.77rem",
      "3xl-5": "1.41rem",
      "4xl-6": "1.48rem",
      "59xl": "4.88rem",
      "145xl": "10.25rem",
      "135xl-9": "9.68rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
