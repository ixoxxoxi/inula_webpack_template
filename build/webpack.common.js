const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin, DefinePlugin } = require('webpack');

module.exports = {
  entry: {
    app: {
      import: path.resolve(__dirname, '../', 'src/main.js'),
    },
  },
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'js/[name].[chunkhash:8].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'public/index.html'),
      inject: 'body',
      filename: 'index.html',
      title: 'Horizon Project',
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      'process.env': {
        mock: JSON.stringify(!!process.env.mock),
      },
    }),
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.(css|less)$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {
        test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
        type: 'asset/resource',
        generator: { filename: 'img/[name].[contenthash:8][ext]' },
      },
    ],
  },
  resolve: {
    alias: {
      react: 'openinula',
      'react-dom': 'openinula',
      'react-is': 'openinula',
      '@': path.resolve(__dirname, '../', 'src'),
    },
    extensions: ['.js', '.jsx', 'json'],
  },
};
