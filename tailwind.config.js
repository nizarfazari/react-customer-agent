/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: {
          600: '#ADD8E6', // Lightblue base color
          700: '#87CEEB', // Lightblue hover color
        },
        lightgray: {
          600: '#D3D3D3', // Lightgray base color
          700: '#A9A9A9', // Lightgray hover color
        },

      },

    }
  },
  plugins: [],
}