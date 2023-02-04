const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
    },
    screens: {
        // adding xs to the rest
      xs: {"max": "600px"},
        // if you did not add this, you would have only "xs"
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
