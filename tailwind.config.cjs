/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-gray-cyan': 'hsl(186, 14%, 43%)',
        'gray-cyan':'hsl(184, 14%, 56%)',
        'light-gray-cyan':'hsl(185, 41%, 84%)',
        'very-light-gray-cyan': 'hsl(189, 41%, 97%)',
        'green-light-cyan': 'hsl(172, 67%, 45%)',
        'white': 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
