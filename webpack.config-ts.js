const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { join } = require("path");

module.exports = {
  mode: "development",
  entry: "./client-typescript/src/app.ts",
  output: {
    filename: "bundle-typescript.js",
    path: join(process.cwd(), "dist"),
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: join(process.cwd(), "tsconfig.fat.json"),
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [new CleanWebpackPlugin()],
  devServer: {
    contentBase: join(process.cwd(), "public"),
    publicPath: "/dist",
    compress: true,
    port: 9000,
  },
};
