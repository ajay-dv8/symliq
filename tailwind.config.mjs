import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");


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
      screens: {
        xs: '20rem'
      },
      animation: {
        slowPulse: "pulse 3s infinite", 
        shimmer: "shimmer 2s linear infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
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