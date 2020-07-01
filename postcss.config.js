const tailwindcss = require('tailwindcss');
const join = require('path').join;
const tailwindJS = 'tailwind.config.js';

module.exports = {
  plugins: [tailwindcss(tailwindJS), require('autoprefixer')]
};
