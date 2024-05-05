/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // external content will require CORS
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}