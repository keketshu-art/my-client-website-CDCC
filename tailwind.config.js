/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Gold & Navy Blue Color Scheme (Exact User Swatches)
        palette: {
          midnight: "#05005B", // Darkest Midnight Navy Blue
          navy: "#00017A",     // Deep Royal Navy Blue
          blue: "#151EA6",     // Electric Royal Blue Accent
          brightgold: "#FED701", // Bright Gold / Yellow
          warmgold: "#FEC203",   // Warm Gold
          ambergold: "#FCB305",  // Deep Amber Gold
        },
        drc: {
          blue: "#151EA6",
          darkblue: "#00017A",
          cardblue: "#05005B",
          navy: "#05005B",
          gold: "#FED701",
          amber: "#FCB305",
          red: "#CE1126",
          slate: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      backgroundImage: {
        'flag-stripe': 'linear-gradient(90deg, #151EA6 0% 33.3%, #FED701 33.3% 66.6%, #CE1126 66.6% 100%)',
        'gold-grad': 'linear-gradient(120deg, #FED701 0%, #FEC203 50%, #FCB305 100%)',
        'navy-grad': 'linear-gradient(135deg, #05005B 0%, #00017A 50%, #151EA6 100%)',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(21,30,166,0.3), transparent 70%)',
      },
    },
  },
  plugins: [],
};
