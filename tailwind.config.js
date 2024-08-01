/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: { maxWidth: {
      'full': '100%',
    },
    maxHeight: {
      'full': '100%',
    },fontFamily: {
      sans: ['Comic Neue', 'sans-serif'],
    },},
  },
  plugins: [],
}


