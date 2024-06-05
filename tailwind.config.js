/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'kr': "url('/kr.png')",
        'krbanner': "url('/krbanner.png')",
      }
    },
    fontFamily: {
     'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
     'poppins': ['Poppins', 'sans-serif'],
     'dmsans': ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}

