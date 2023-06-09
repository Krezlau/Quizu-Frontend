/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#22d3ee",

          secondary: "#1d4ed8",

          accent: "#155e75",

          neutral: "#dbeafe",

          "base-100": "#ffffff",

          info: "#0000ff",

          success: "#008000",

          warning: "#4b5563",

          error: "#ff0000",
        },
      },
      ,
      {
        dark: {
          primary: "#641ae6",

          secondary: "#d926a9",

          accent: "#1fb2a6",

          neutral: "#2a323c",

          "base-100": "#1d232a",

          info: "#3abff8",

          success: "#36d399",

          warning: "#9ca3af",

          error: "#f87272",
        },
      },
    ],
  },
};
