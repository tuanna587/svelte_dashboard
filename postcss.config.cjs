// const windicss = require("windicss");
const autoprefixer = require("autoprefixer");

const config = {
  plugins: [
    //Some plugins, like windicss/nesting, need to run before Tailwind,
    // windicss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
  ],
};

module.exports = config;
