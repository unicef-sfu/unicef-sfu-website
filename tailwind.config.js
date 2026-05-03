const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive', ...defaultTheme.fontFamily.sans],
        'libre': ['"Libre Baskerville"', 'serif'],
      },
    },
  },
  plugins: [],
};
