/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'iphone-se': '375px', // Custom breakpoint for iPhone SE
      },
      fontFamily: {
        techno: ["TechnoNue"],
      },
      animation: {
        hacker: "hacker 5s linear infinite",
        'hacker-up': 'hackerUp 6s linear infinite',
        'hacker-down': 'hackerDown 6s linear infinite',
      },
      keyframes: {
        hackerUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        hackerDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        hacker: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      boxShadow: {
        "glow-green": "0 0 5px #26fff9, 0 0 10px #26fff9, 0 0 20px #26fff9",
      },
    },
  },
  plugins: [],
};
