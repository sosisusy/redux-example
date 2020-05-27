const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: process.env.WEBPACK_MODE == "production" ? "production" : "development",
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.m?(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ],
                    }
                }
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.(sass|scss)$/,
                loader: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        stats: 'errors-only',
        overlay: true,
        open: true,
        port: 8080
    },
    resolve: {
        alias: {
        },
        extensions: [".js", ".jsx"]
    }
}