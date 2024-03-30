import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBorder: "#E1E4E8",
        primary: "#FFFFFF",
        accent: {
          100: '#f7e7d4', // Lightest shade
          200: '#e5c7a8',
          300: '#d4a87c',
          400: '#c28a50',
          500: '#955e2d', // Original color
          600: '#7a4c23',
          700: '#604118',
          800: '#472e0e',
          900: '#2d1f06'
        },
        gray: {
          100: '#f5f5f5', // Lightest shade
          200: '#e0e0e0',
          300: '#cccccc',
          400: '#b8b8b8',
          500: '#a5a5a5', // Mid-gray shade
          600: '#8c8c8c',
          700: '#737373',
          800: '#595959',
          900: '#404040' // Darkest shade
        }
      },
    },
  },
  plugins: [],
};
export default config;
