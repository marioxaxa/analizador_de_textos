/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        pallet: {
          background:	'#2D2B55',
          backgrounddark:	'#1E1E3F', 
          Foreground:	'#A599E9',
          hoverbackground:'#4D21FC',
          contrast:	'#FAD000',
          contrastlite:	'#FFEE80',
          contrastliteII:	'#FAEFA5',
          correct: '#00FF009A',
          incorrect: '#FF000D81'
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

