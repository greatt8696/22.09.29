/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "ping-one": "ping 0.1s ease-out 1",
      },
    },
  },
  plugins: [],
};

const a = [1, 2, 3, 4, 5, 6];

const b = [...a] === [1, 2, 3, 4, 5, 6];

const c = [...a, "뀨", "뀨뀨"] === [1, 2, 3, 4, 5, 6, "뀨", "뀨뀨"];
