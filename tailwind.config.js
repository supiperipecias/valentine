/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#1A1A1D',
          secondary: '#2E2E38',
        },
        text: {
          primary: '#E6E6E6',
        },
        accent: {
          rose: '#C06C84',
          red: '#FF2E63',
          purple: '#6A0572',
        },
      },
    },
  },
  plugins: [],
}
