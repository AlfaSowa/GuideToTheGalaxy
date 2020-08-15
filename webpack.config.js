const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: { path: path.resolve(__dirname, "./dist") },
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new TerserJSPlugin({
    //             terserOptions: {
    //                 output: {
    //                     comments: false,
    //                 },
    //             },
    //             extractComments: false,
    //         }),
    //         new OptimizeCSSAssetsPlugin(),
    //     ],
    // },
    devServer: { port: 8181 },
    resolve: { extensions: [".tsx", ".ts", ".js"] },
    module: {
        rules: [
            //js, jsx
            {
                test: /\.jsx?$/,
                exclude: "/node_modules/",
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    },
                },
            },
            //typescript
            {
                test: /\.tsx?$/,
                exclude: "/node_modules/",
                loader: "ts-loader",
            },
            //styles
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            //images
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                loader: "file-loader",
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{ from: path.resolve(__dirname, "src/favicon.ico"), to: path.resolve(__dirname, "dist") }]),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};
