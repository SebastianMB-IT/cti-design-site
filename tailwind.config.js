/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        'hd': '80rem'
      },
      borderRadius: {
        '2.5xl': '0.875rem',
        'xxl': '4rem',
      }
    }
  },
  plugins: [],
}
