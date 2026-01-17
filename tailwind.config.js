/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7fa',
          100: '#e0eff5',
          200: '#b8dce9',
          300: '#8fc9dd',
          400: '#5ba9c4',
          500: '#4A90A4',
          600: '#3d7a8c',
          700: '#336573',
          800: '#2a505c',
          900: '#1e3a42',
        },
      },
    },
  },
  plugins: [],
}
