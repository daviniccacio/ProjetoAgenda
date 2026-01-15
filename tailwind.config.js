/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.ejs", // Caminho para suas views EJS
    "./public/**/*.js", // Caminho para arquivos JS no front-end
    "./src/**/*.{html,js}" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}