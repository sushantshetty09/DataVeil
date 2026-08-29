/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        text: '#0a0a0a',
        accent: '#0a0a0a',
        secondary: '#f9f9f9',
        border: '#e5e5e5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tight: '-0.025em',
      },
      borderRadius: {
        card: '8px',
        btn: '6px',
        pill: '100px',
      }
    },
  },
  plugins: [],
}
