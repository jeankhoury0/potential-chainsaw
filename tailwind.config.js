module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
      colors: {
          mainAccent: '#406576',
          secondAccent: '#3AAFA9',
          grayAccent: '#17242A',
          creme: '#D8C3A4',
          whiteoff: '#EAE8DC',
          linkedin: '#0073b1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
}
