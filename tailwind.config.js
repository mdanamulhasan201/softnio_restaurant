/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    
      fontWeight: {
        ultraThin: 100,     
        extraLightWeight: 200, 
        softLight: 300,     
        regular: 400,      
        balanced: 500,    
        strong: 600,   
        heavy: 700,     
        superHeavy: 800,  
        ultraHeavy: 900,
      },
    },
  },
  plugins: [],
};
