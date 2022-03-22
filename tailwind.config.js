
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:theme=>({
        // 'bg-img':"url('./src/assets/bg.png')"
        // 'bg-img':"url('./bg.png')"
      })
    },
  },
  plugins: [],
}