/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',
  
  theme: {
    fontFamily: {
      "sans": ["Inter", "sans-serif"]
    },

    extend: {
      colors: {
        // flowbite-svelte
        nonprimary: {50: "#F4F6F6"},
        primary: {50: "#e8f1fb", 100: "#d1e4f6", 200: "#a3c8ed", 300: "#75ade4", 400: "#4791db", 500: "#1976d2", 600: "#1976d2", 700: "#1976d2", 800: "#1976d2", 900: "#1976d2"},
      },

      spacing: {
        "84": "26rem",
        "128": "32rem",
        "256": "64rem",
      }
    }
  }
};

module.exports = config;