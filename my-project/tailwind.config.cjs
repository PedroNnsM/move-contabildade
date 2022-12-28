/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "move-blue-900": "#0F152D",
      "move-blue-500": "#44B7CA",
      "move-blue-100": "#B1C0F7",
      "move-gray-100": "#EDEDED",
    },
    extend: {
      backgroundImage: {
        'foto-header': "url('./assets/Imagem-61-removebg-preview.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}