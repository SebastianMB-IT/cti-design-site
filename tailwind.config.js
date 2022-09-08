/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Fira Code', ...defaultTheme.fontFamily.sans],
      'serif': ['Inter', ...defaultTheme.fontFamily.serif],
    },
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
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
