/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    },
    screens: {
      '2xl': {'min': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'min': '1279px'},
      // => @media (max-width: 1279px) { ... }
      'md': {'min': '940px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '900px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [[require('@tailwindcss/forms')({strategy:'class'})]],
}

