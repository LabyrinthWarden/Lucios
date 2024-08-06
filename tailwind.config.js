/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ['emerald'],
  },
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'flag-green': '#006845',
      'flag-red': '#cf0922',
    },
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
