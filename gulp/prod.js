const { merge } = require("webpack-merge");
const shared = require("./shared");

module.exports = merge(shared, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[contenthash].bundle.js",
  },
});
