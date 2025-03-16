 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./index.htm", "./src/**/*.{htm,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xs: "480px",
    },
  },
  plugins: [],
}