import { join } from "path";
import { Configuration } from "webpack";
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// import * as ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

interface Mine extends Configuration {
  devServer: {
    contentBase?: string;
    port?: number;
    publicPath?: string;
    faker?: string;
  };
  // [key: string]: any;
}

const config: Mine = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./react-todo/src/app.tsx",
  output: {
    filename: "bundle-react.js",
    path: join(process.cwd(), "dist"),
  },
  devServer: {
    contentBase: join(process.cwd(), "public"),
    // contentBase: join(process.cwd(), "dist"),
    port: 9090,
    publicPath: "/dist",
  },
  module: {
    // loaders: [],
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        // exclude: /node_modules/,
        // loaders:[],
        include: join(__dirname, "react-todo/"),
        use: {
          loader: "babel-loader",

          options: {
            configFile: join(process.cwd(), "baba.json"),
            // presets: ["@babel/typescript", "@babel/react", "@babel/env"],
            // plugins: [
            //   "@babel/transform-runtime",
            //   "@babel/proposal-class-properties",
            // ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: join(process.cwd(), "tsconfig.react.json") },
    }),
    //     new HtmlWebpackPlugin({
    //       templateContent: `
    // <!DOCTYPE html>
    // <html lang="en">
    //   <head>
    //     <meta charset="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>Document</title>
    //   </head>
    //   <div id="app-react"></div>
    //   <body></body>
    // </html>
    // `,
    //       title: "Abdullah ibn AbdulFattah",
    //       // templateContent:''
    //     }),
  ],
};

export default config;
