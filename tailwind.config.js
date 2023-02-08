/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#7F56D9","600":"#7F56D9","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
    }},
  },
  plugins: [],
}