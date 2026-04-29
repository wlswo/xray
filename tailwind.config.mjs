/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        xray: {
          green: '#457857',
          'green-light': '#5a9e72',
          'green-glow': 'rgba(69, 120, 87, 0.4)',
        },
      },
    },
  },
  plugins: [],
};
