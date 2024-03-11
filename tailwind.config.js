/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'egg': '#f4f6fc',
      'egger': '#e0e3ef',
      'faisan': '#8c9ab3',
      'faisanner': '#a4b3ce',
      'dark': '#343a44',
      'darker': '#141517',
      'light': '#b7bece', 
      'lighter': '#e4e7f4',
      'emerald': {
        '50': '#ecfdf5',
        '100': '#dcfce7',
        '200': '#bbf7d0',
        '300': '#86efac',
        '400': '#4ade80',
        '500': '#22c55e',
        '600': '#16a34a',
        '700': '#15803d',
        '800': '#166534',
        '900': '#14532d',
        '950': '#052e16'
      }
    },
    extend: {},
  },
  plugins: [],
}

