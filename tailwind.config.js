/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#F87070',
      blue: '#70F3F8',
      lila: '#D881F8',
      'lila-ligth': '#D7E0FF',
      'black-light': '#1E213F',
      white: '#FFFFFF',
      pink: '#EFF1FA',
      'black-dark': '#161932'
    },
    extend: {
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
        roboto: ['Roboto Slab', 'sans-serif'],
        space: ['Space Mono', 'monospace']
      }
    }
  },
  plugins: []
}
