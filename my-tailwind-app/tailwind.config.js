import { transform } from "typescript";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      },
      keyframes: {
        'slide-in-lr': {
          '0%' : {opacity: '0',
           transform : 'translateX(-12rem)'},
          '100%' : {opacity:'1',
            transform: ' translate(0)'}
        },
        'slide-in-rl':{
          '0%': {opacity: '0', transform : 'translateX(12rem)'},
          '100%': {opacity: '1',transform : 'translateX(0)'}
        }, 
        'slide-in-bt':{
          '0%': {opacity: '0', transform : 'translateY(12rem)'},
          '100%': {opacity: '1',transform : 'translateY(0)'}
        },

      },
      animation: {
        'slide-in-lr': 'slide-in-lr 1s ease-out forwards' , 
        'slide-out-lr' : 'slide-in-rl 1s ease-out backwards',
        'slide-in-bt' : 'slide-in-bt 1s ease-out upwards'

      }
    },
  },
  plugins: [require('@adam.plesnik/tailwindcss-scroll-driven-animations'),],
}