import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content:{
    files: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  extract
 },
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)

    extend: {
      fontFamily: {
        intertight: ["var(--font-intertight)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      screens: {
        xs: '20rem'
      },
      animation: {
        slowPulse: "pulse 3s infinite", 
        shimmer: "shimmer 2s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",

        // for hero
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",

        logoZoom: "logoZoom 2s ease-in-out forwards",
        fadeInOut: "fadeInOut 3s ease-in-out forwards",
      },
      keyframes: {
        logoZoom: {
          "0%": { transform: "scale(0)" },
          "70%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)", opacity: 0 },
        },
        fadeInOut: {
          "0%": { opacity: 1 },
          "80%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          },
        },
        // for hero
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorLight: "#eee",
        colorDark: "#161616",
        customBlue: "#1c69f9",
        customOrange: "#fe9000",
        teal: "#008080"
      },
    },
  },
  plugins: [
    addVariablesForColors, 
    fluid,

    function ({ matchUtilities, theme } ) {
      matchUtilities(
        {
          "bg-dot-thick": (value ) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};



function addVariablesForColors({ addBase, theme } ) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}