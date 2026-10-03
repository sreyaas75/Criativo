/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0b0a',
        panel: '#161412',
        line: '#2a2623',
        bone: '#f3efe9',
        mute: '#a29a91',
        flame: '#ff6b1a',
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      screens: { xs: '480px', '3xl': '1680px' },
    },
  },
  plugins: [],
}
