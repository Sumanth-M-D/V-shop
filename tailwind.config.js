/** @type {import('tailwindcss').Config} */

/*
-- 01. Typography system 

FONT SIZE SYSTEM (px)
   10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

font weights 
   default:400;
   medium :500;
   semi-bold :600;
   bold:700;

line-height 
   default:1 ;
   small:1.05;
   paragraph-default:1.6;

letter-spacing 
   -0.5px;
   0.75px;
   1.2px;



--02. Colors
--primary-color: #fcb941;

--Primary-tints: #fdc767 , #fdce7a, #fdd58d 

--primary-shades: #b0822e, #654a1a , #32250d

--accents:

--greys:
#555;
#333;
#767676;

#6f6f6f (lightest grey allowed on #f8d8bd)
--others
fae5d3


--03. Images -> unsplash.com


--04. People for testimonials -> UI faces


--05. shadows 


--06. Border radius
default : 9px;
13px;

--07. Whitespace

SPACING SYSTEM (px)
   2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#fcb941",
      secondary: "#f5f6f9",
      black: "#333333",
      white: "#fff",
      "custom-blue": "##479BFE",
      "custom-green": "#A6C76C",
      "custom-red": "#F2837B",

      // "primary--tint__1": "#fdc767",
      // "primary--tint__2": "#fdce7a",
      // "primary--tint__3": "#fdd58d",

      "primary--shade__1": "#ca9434",
      "primary--shade__2": "#976f27",
      // "primary--shade__3": "#32250d",

      // For text
      "secondary--shade__0": "#acacae",
      "secondary--shade__1": "#7b7b7d",
      "secondary--shade__2": "#494a4b",
      "secondary--shade__3": "#313132",

      "secondary--tint__1": "#f7f8fa",
    },
    extend: {
      screens: {
        xxxs: "375px",
        xxs: "435px",
        xs: "528px",
        upperMd: "900px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
