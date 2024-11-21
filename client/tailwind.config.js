/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.5)" },
          "50%": { boxShadow: "0 0 20px 6px rgba(59, 130, 246, 0.8)" },
        },
      },
      animation: {
        glow: "glow 1.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
