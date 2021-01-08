const { join } = require("path");
module.exports = {
  // mode: "development",
  // mode: "production",
  entry: "./client/src/app.js",
  output: {
    filename: "bundle.js",
    path: join(process.cwd(), "public"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
            plugins: ["@babel/proposal-class-properties"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx"],
  },
};
