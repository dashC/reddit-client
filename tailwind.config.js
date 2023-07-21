/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{js,ts,jsx,tsx}","./index.html",],
  theme: {
    extend: {},
  },
  plugins: [],
}