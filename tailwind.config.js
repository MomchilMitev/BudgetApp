/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
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
