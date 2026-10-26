export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171717',
        accent: '#7c3aed',
        blush: '#f59e0b',
        mist: '#f6f3ff'
      },
      boxShadow: {
        soft: '0 20px 45px rgba(26, 26, 35, 0.12)'
      }
    }
  },
  plugins: []
};
