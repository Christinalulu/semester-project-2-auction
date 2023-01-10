module.exports = {
  content: ["./*.{html,js}", "./js/*.js"],
  theme: {
    extend: {
      colors:{
        "primary": "#CED7D9",
        "mainBlue": "#2F67BB",
        "darkerBlue": "#004C81",
        "hoverAffect": "#3BD7FA"
      },
      fontFamily:{
       poppins:"'poppins',sans-seri",
       zenDots: "'zen Dots', sans-seri"
      },
      backgroundImage:{
        mainBackground: "url('./public/bg-register.jpg')",
      }
      
    },
  },
  plugins: [],
};

