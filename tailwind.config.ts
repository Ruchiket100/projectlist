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
          50: "#70D07E",
          100: "#5ECB76",
          200: "#4CC56D",
          300: "#3BBF64",
          400: "#29B95B",
          500: "#00AA45",
          600: "#009B3E",
          700: "#008C37",
          800: "#007D30",
          900: "#006E29",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
