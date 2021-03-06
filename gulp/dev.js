const { merge } = require('webpack-merge');
const shared = require('./shared');

module.exports = merge(shared, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
  },
  // optimization: {
  //   moduleIds: 'deterministic',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
});
