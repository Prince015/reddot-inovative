/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      vsm: "300px",
      sm: "390px",
      // => @media (min-width: 640px) { ... }

      mvsm: "480px",
      msm: "600px",
      smd: "650px",
      md: "770px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
    
    extend: {
      colors:{
        'Primary-Colour':'#EF3340',
        'secondary':'#1D4ED8',
        'secondary-2':'#222638',
        'text/heading':'#25282B',
        'my-yellow' : '#FAC850',
        'my-blue' : '#355ADE',
        'my-green' : '#35DDA1',
        'my-white' : '#A8A8A8',
        "explore/work/vr" :  'rgba(50, 54, 56, 0.1)',
      },
      outlineWidth:{
        '6' : '6px',
      },
      boxShadow:{
        'testimonial': "0px 2px 9px rgb(0 0 0 / 25%)",
        'inovateBox' : "0px 0px 20px 1px #c9c9c9",
      },
      backgroundSize:{
        'exploreWorksPhone' : "auto 80%"
      },
      backgroundPositionY:{
        "aboutUsbgHero":"96px"
      },
      keyframes : {
        curser_upDown : {
          '0%': { marginTop : '4px' },
          '100%': { marginTop: '16px' },
        }
      },
      animation:{
        curser_upDown : 'curser_upDown  0.7s ease-in-out infinite',
      }
      
    },
    
  },
  plugins: [],
};
