/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './**/*.{html,js}',
    './css/**/*.css',
    './js/**/*.js',
  
  ],
  darkMode: 'class',

  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'b1':'#1E293B',
      'b2':'#64748B',
      'b3':'#E4E4E7',
      'b4':'#FAFAFA',
      'b5': '#1E1E1E',
      'b6': '#2E3192F3',
      'b7':'#F37021F3',
      'b8': '#F26737',
      'bg1': '#D9D9D9',
      'b11': '#FBFBFF',
      'b12': '#BCBDBD',
      'b13': '#F9CF66',
      'white': '#FFFFFF',
      'gray-500': '#475569',
      'f':'#ffff',
      'blue':'#31407688'

    },
    fontFamily: {
      'IRANSansWeb300': ['IRANSansWeb300', 'IRANSansWeb300'],
      'IRANSansWeb400': ['IRANSansWeb400', 'IRANSansWeb400'],
      'IRANSansWeb500': ['IRANSansWeb500', 'IRANSansWeb500'],
      'IRANSansWeb700': ['IRANSansWeb700', 'IRANSansWeb700'],
      'IRANSansWeb900': ['IRANSansWeb900', 'IRANSansWeb900'],
      'YekanBakh400': ['YekanBakh400', 'YekanBakh400'],
      'YekanBakh700': ['YekanBakh700', 'YekanBakh700']
    },
    extend: {
      spacing: {
        '1.5': '1.5em',
        '2.5': '2.5em',
        
      },
      content:{
  'content1':' '
      },
      lineHeight: {
        '18.78': '18.78px',
        '64': '64px',
        '23':'23px',
        '25.4':'25.04px',
        '57.97':'57.97px',
        '17.96': '17.96px',
        '21.91': '21.91px',
        '32.03':'32.03px',
        '56.35':'56.35px',
        '25.04':'25.04px',
        '37.97':'37.97px',
        '37.57':'37.57px',
        '31.03':'31.03px',
        '93.91':'93.91px',
        '75.13':'75.13px',
        '31':'31px',


       

      },

      width:{
        '85':'85%'
      },
      maxWidth: {
        'x100': '100%',
      },
      fontSize: {
        'f1':'20px',
        // 'xl':'24px',
        // '2xl': '64px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',

      }
    },
    translate: {
      '100': '-100%',
    }
  },
  plugins: [

    plugin(function({ addComponents , theme}) {
      addComponents({
        '.linear':{
          transition:' background .5s ease',
          '&:hover':{
            background:'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(46, 49, 146, 0.5) 100%)' ,
            transition:' background .5s ease',
          }
        },
        '.btn': {
          width:'auto',
          display:'flex',
          justifyContent:'center',
          alignItems :'center',
          position:'relative',
          backgroundColor:'#FAFAFA' ,
          paddingBottom:'.5rem',
          paddingTop:'.5rem',
          paddingLeft:'2.5rem',
          paddingRight:'2.5rem',
          '&::before':{
            width:'12px',
            height:'12px',
            // content:var(--tw-content),
            position:'absolute',
            top:'40%',
            bottom:'50%',
            left:'.5rem',
            borderRadius:'50%',
            backgroundColor: '#F26737',
          }


        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })
    })
  ]
  ,

}