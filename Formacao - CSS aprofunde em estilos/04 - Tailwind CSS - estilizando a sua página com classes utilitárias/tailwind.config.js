/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      extend: {
        azul: {
          claro: '#C5DFFF',
          escuro: '#061E3C',
          hover: '#1057B0',
        },
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
