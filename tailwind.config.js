/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        0.5: "0.5px",
      },
      borderColor: {
        "black-20": "rgba(0, 0, 0, 0.2)",
      },
      colors: {
        "macos-blue": "#007AFF",
      },
      backgroundImage: {
        "primary-enabled-gradient":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.17) 0, rgba(255, 255, 255, 0) 100%)",
        "primary-enabled-gradient-hovered":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0, rgba(0,0,0, 0) 100%)",
      },
    },
  },
  plugins: [],
};
