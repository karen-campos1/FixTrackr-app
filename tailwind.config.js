/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0466C8',    // Primary Brand Color
          dark: '#005BBD',       // Primary Brand Color - Dark
          light: '#7BB8FA',      // Primary Brand Color - Light
        },
        secondary: {
          DEFAULT: '#20C997',    // Secondary Brand Color
          bg: '#F3F5F9',         // Secondary Background
        },
        white: '#FFFFFF',         // White Background
        text: {
          primary: '#333333',    // Primary Text
          secondary: '#5C5D6D',  // Secondary Text
          tertiary: '#B3B3B3',   // Tertiary Text
        },
        gray: {
          icon: '#CCCCCC',       // Icon - Gray
          border: '#D9D9D9',     // Gray Border
        },
        alert: {
          green: '#28A745',      // Alert - Green
          yellow: '#FFC107',     // Alert - Yellow
          red: '#DC3545',        // Alert - Red
        },
      },
      fontFamily: {
        work: ['Work Sans', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['48px', { lineHeight: '56.3px' }],
        'heading-2': ['32px', { lineHeight: '37.54px' }],
        'heading-3': ['24px', { lineHeight: '28.15px' }],
        'body-text': ['16px', { lineHeight: '21.79px' }],
        button: ['16px', { lineHeight: '21.79px' }],
      },
      fontWeight: {
        regular: 400,
        medium: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
