const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
    },
    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         title: "Restaurant Page",
    //     }),
    // ],
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ],
    },
};
