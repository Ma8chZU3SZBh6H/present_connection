module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fr": "auto 1fr",
      },
      backgroundImage: {
        'autumn-pattern': "url('/src/img/autumn.svg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
