/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro"],
        // sans: ["Poppins"],
      },
      colors: {
        tmdbDarkBlue: "rgb(3,37,65)",
        tmdbLightGreen: "rgb(30,213,169)",
        tmdbLightBlue: "rgb(1,180,228)",
      },
      backgroundImage: {
        banner:
          'linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url("https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kSNojkWwSZWsYv0Xj1gcq88okzY.jpg")',
        "trending-section":
          'url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg")',
      },
      backgroundPosition: {
        "one-third": "50% 90%",
        "detail-banner": "right -200px top",
      },
    },
  },
  plugins: [],
};
