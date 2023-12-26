/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: "rgba(68, 70, 77, 0.7)",
        "white-prime": "#f9f9f9",
        gray: {
          "100": "#fafafa",
          "200": "#838383",
        },
        "grey-prime": "#44464d",
        white: "#fff",
        "grey-25": "rgba(68, 70, 77, 0.1)",
        "green-prime": "#1e7876",
        "white-prime-65": "rgba(249, 249, 249, 0.65)",
        whitesmoke: {
          "100": "rgba(249, 249, 249, 0.9)",
          "200": "rgba(249, 249, 249, 0.7)",
        },
        gainsboro: "#d9d9d9",
        darkturquoise: "#00c5c0",
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
      lg: "18px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      "5xl": "24px",
      "29xl": "48px",
      "9xl-3": "28.3px",
      "135xl-9": "154.9px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
