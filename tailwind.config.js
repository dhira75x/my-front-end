/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        deepsaffron: '#FF8F00',
        deepforest: '#004225'
      }
    }
  },
  plugins: []
};
