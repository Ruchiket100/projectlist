import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        accent:{
          50: "#F5E9D9",
          100: "#EDDCC6",
          200: "#E4CEB2",
          300: "#DBBF9E",
          400: "#D2B18A",
          500: "#A66730",
          600: "#955E2D",
          700: "#84552A",
          800: "#734C27",
          900: "#614423",
        },
        primaryBorder: "#E1E4E8"
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
