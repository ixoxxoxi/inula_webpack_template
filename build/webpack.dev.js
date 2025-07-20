module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 9800,
    open: false,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [],
};
