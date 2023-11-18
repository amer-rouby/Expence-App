const HTMLWebpakPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Add this line
  entry: "./src/index.js", // نقطة البداية لتطبيقك

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Add other rules as needed
    ],
  },

  plugins: [
    new HTMLWebpakPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    open: true,
    port: 9000,
  },
};
