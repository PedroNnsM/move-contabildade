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
        },
        fadeIn:{
          '0%' :{opacity: 0, transform: 'translateY(-100px) skewY(10deg) skewx(10deg) rotateZ(-30deg)', filter: 'blur(10px)'},
          '25%' :{opacity: 1, transform: 'translateY(0px) skewY(0deg) skewx(0deg) rotateZ(0deg)', filter: 'blur(0px)'},
          '25%' :{opacity: 1, transform: 'translateY(0px) skewY(0deg) skewx(0deg) rotateZ(0deg)', filter: 'blur(0px)'},
          '100%': {opacity: 0, transform: 'translateY(100px) skewY(10deg) skewx(10deg) rotateZ(30deg)', filter: 'blur(10px)'}
        },
        }
      },
      animation: {
        'fadeIn': 'fadeIn 18s infinite forwards cubic-bezier(0.075, 0.82, 0.165, 1)',
        typing: 'typing 3s steps(40) infinite',
        slide: 'slide 15s steps(5) infinite'
      },
      animationDelay: {
        '0': '1s',
        '1': '0.1s',
        '2': '0.2s',
        '3': '6.3s',
        '4': '0.4s',
        '5': '0.5s',
        '6': '0.6s',
        '7': '0.7s',
        '8': '0.8s',
        '9': '0.9s',
        '10': '1s',
        '11': '1.1s',
        '12': '1.2s',
        '13': '1.3s',
        '14': '1.4s',
        '15': '1.5s',
        '16': '1.6s',
        '17': '1.7s',
        '18': '1.8s',
        '19': '1.9s',
        '20': '2.0s',
        '21': '2.1s',
        
      },
    },
  plugins: [],
}