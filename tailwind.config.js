/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        back: '0px -5px 5px 14px rgba(43,40,40,0.5)',
      },
      colors: {
        background: '#fcfbff',
        primary: '#5619d9',
        secondary: '#e6e6e6',
        accent: '#5773a8',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
