/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        slideIn:{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut:{
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shine: {
          '0%': {transform: 'translateX(-200px) rotate(-45deg)'},
          '50%': {transform: 'translateX(200px) rotate(-45deg)'},
          '100%': {transform: 'translateX(-200px) rotate(-45deg)'},
        },
      },
      animation: {
        shine: 'shine 3s infinite',
        slideIn: 'slideIn 0.6s ease-out',
        slideOut: 'slideOut 0.6s ease-out',
      },
    },
  },
  plugins: [],
};
