module.exports = {
  module: {
    rules: [
      //FOR BABEL
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      //FOR HANDLEBARS
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: 'handlebars-loader',
      },
    ],
  },
  // plugins: [new CleanWebpackPlugin()],
};
