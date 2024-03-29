/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans"],
        Space: ["Space Grotesk", "sans"],
      },
      colors: {
        esprilca: {
          700: "#1F2933",
          800: "#2D2D2C",
        },
      },
    },
  },
  plugins: [],
};
