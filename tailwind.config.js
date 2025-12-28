/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        game: "url('/background.jpg')",
      },
    },
  },
  plugins: [],
};
