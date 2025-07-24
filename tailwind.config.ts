/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
     extend: {
      fontFamily: {
        heading: 'var(--font-playfair-display)',
        body: 'var(--font-switzer)',
      },
    },
  },
  plugins: [],
}
