export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          900: '#064e3b',
          950: '#022c22',
        },
        gold: {
          100: '#fdf6d0',
          200: '#d4af37',
          300: '#aa8810',
        },
        cream: '#fffdf5',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}