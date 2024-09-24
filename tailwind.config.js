/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}", // Include Storybook config files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Primary color (blue)
        secondary: "#9333EA", // Secondary color (purple)
        // You can add hover styles and other customizations if needed
        'primary-dark': "#1E40AF", // Darker shade for primary
        'secondary-dark': "#7E22CE", // Darker shade for secondary
      },
    },
  },
  plugins: [],
}