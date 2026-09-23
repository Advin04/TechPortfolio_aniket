/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hue: 'var(--hue)',
        first: 'var(--first-color)',
        'first-alt': 'var(--first-color-alt)',
        body: 'var(--body-color)',
        container: 'var(--container-color)',
        border: 'var(--border-color)',
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
}
