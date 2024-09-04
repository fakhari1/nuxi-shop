/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./components/**/**/*.{js,vue,ts}",
    "./components/**/**/**/*.{js,vue,ts}",
    "./layouts/*.vue",
    "./layouts/**/*.vue",
    "./layouts/**/**/*.vue",
    "./layouts/**/**/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./pages/**/**/*.vue",
    "./pages/**/**/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}