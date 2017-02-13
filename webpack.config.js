var path = require('path');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./client/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "build", "prod", "js"),
    filename: "bundle.js",
    publicPath: "assets/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        options: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  }

}
