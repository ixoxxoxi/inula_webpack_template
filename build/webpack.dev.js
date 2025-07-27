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
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api/v1': '',
        },
      },
    },
  },
  plugins: [],
};
