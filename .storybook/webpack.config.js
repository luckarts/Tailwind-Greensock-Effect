const path = require('path');
const tailwindcss = require('tailwindcss');
const tailwindJS = 'tailwind.config.js';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],

    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [tailwindcss(tailwindJS), require('autoprefixer')]
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  });
  return config;
};
