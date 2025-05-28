// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'bakery-pink': '#F8E8E8',
        'bakery-cream': '#F5F0E8',
        'bakery-brown': '#D4A574',
        'bakery-text': '#8B4513',
        'bakery-bg': '#FEFCFC',
        'bakery-shadow': 'rgba(0, 0, 0, 0.1)',
        'bakery-shadow-hover': 'rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 8px 15px rgba(0, 0, 0, 0.15)',
        'header': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'header-scrolled': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'hero': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
