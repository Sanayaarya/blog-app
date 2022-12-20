
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/Header.js',
    './src/pages/Home.js',
    './src/components/Main.js',
    './src/components/Tag.js',
    './src/pages/Login.js',
    './src/pages/Article.js',
    './src/pages/CreateArticle.js',
    './src/pages/UserProfile.js',
    './src/pages/EditProfile.js',
  ],
  theme: {
    extend: {
      colors: {
        green: '#5CB85B',
        grey: '#B2B2B2',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};