/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#07070F',
        darkLight: '#0C0C1E',
        darkCard: 'rgba(16, 16, 36, 0.6)',
        lightBg: '#F8FAFC',
        lightLight: '#F1F5F9',
        lightCard: 'rgba(255, 255, 255, 0.7)',
        accentPrimary: '#854CE6',
      },
      boxShadow: {
        'accent-glow': '0 0 20px rgba(133, 76, 230, 0.35)',
        'accent-glow-strong': '0 0 35px rgba(133, 76, 230, 0.6)',
      }
    },
  },
  plugins: [],
}
