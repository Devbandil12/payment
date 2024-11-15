module.exports = {
  content: [
    './index.html', // Make sure your HTML files are included
    './src/**/*.{js,jsx,ts,tsx}', // Include your JS/JSX/TS/TSX files
  ],
  theme: {
    extend: {
      animation: {
        pendulum: 'pendulum 2s ease-in-out infinite',
      },
      keyframes: {
        pendulum: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-20deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};