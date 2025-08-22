/** @type {import('tailwindcss').Config} */
export default {
  // darkMode removed (no longer used)
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Updated brand palette (Prussian / Professional Deep Blues)
        brand: {
          50:  '#f2f6f9',
          100: '#e2ecf3',
          200: '#c3d9e7',
          300: '#9abfd4',
          400: '#5e96b4',
          500: '#2f6f8f',
          600: '#1e4f66', // primary base (approx #18435a family)
          700: '#183d4e',
          800: '#132f3d',
          900: '#0f2530'
        },
        neutral: {
          25: '#fcfdfd',
          50: '#f7f8f9',
          100: '#eef1f3',
          200: '#d9dee2',
          300: '#bcc5cc',
          400: '#94a1ad',
          500: '#6b7986',
          600: '#4e5a66',
          700: '#39434d',
          800: '#22282e',
          900: '#14171b'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
