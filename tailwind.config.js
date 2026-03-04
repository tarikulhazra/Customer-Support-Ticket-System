/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"; // require এর বদলে import ব্যবহার করুন

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
