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
      "move-white": "#ffffff"
    },
    extend: {
      backgroundImage: {
        'foto-header': "url('./assets/Imagem-61-removebg-preview.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'foto-header-desktop': 'url(./assets/Imagem-60-removebg-preview.png)'
      },
      keyframes:  {
        typing: {
          '100%' : { left: '100%', margin: '0 -35px 0 35px' }
        },
        slide:{ 
          '100%' : { top: '-200px'}
        }
      },
      animation: {
        typing: 'typing 3s steps(40) infinite',
        slide: 'slide 15s steps(5) infinite'
      }
    },
  },
  plugins: [],
}