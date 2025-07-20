const { merge } = require('webpack-merge');
const common = require('./build/webpack.common.js');
const dev = require('./build/webpack.dev.js');
const prod = require('./build/webpack.prod.js');

module.exports = function ({ development }) {
  return merge(common, development ? dev : prod);
};
