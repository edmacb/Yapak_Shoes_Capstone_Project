/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      flex: {
        "1-0-16": "1 0 16.666%",
      },
      fontFamily: {
        sans: ["'Noto Sans'"],
      },
    },
    plugins: [],
  },
};
