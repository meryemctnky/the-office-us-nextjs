/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Sanchez', 'sans-serif'],
      },
      colors: {
        primary: '#301b3f',
        secondary: '#303030',
        success: ' #8f8f8f',
        danger: '#ff304f',
        info: '#3c415c',
        warning: '#b4a5a5',
        light: '#e1e6eb',
        dark: '#151515',
      },
      backgroundImage: {
        'header-pattern': "url('/bg-header.png')",
      },
      plugins: [],
    },
  },
};
