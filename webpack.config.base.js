var path = require("path"); //nodejs内置模块
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        one: "./src/one.js",
    },
    plugins: [
        //配置多个应用
        new HtmlWebpackPlugin({
            //假设是前台应用入口
            title: "首页",
            filename: "index.html",
            template: "./public/index.html",
            chunks: ["index"], //chunks指定需要引入的入口模块的键名 index:"./src/index.js"
        }),
        new HtmlWebpackPlugin({
            //假设是后台应用入口one:"./src/one.js"
            title: "One",
            filename: "one.html",
            template: "./public/one.html",
            chunks: ["one"], //chunks指定需要引入的入口模块的键名 one:"./src/one.js"
        }),
        new CleanWebpackPlugin(),
        new WebpackBar()

    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contenthash].main.js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    //   options: {
                    //     presets: ["@babel/preset-env", "@babel/preset-react"],
                    //   },
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            publicPath: "./../img",
                            outputPath: "img/",
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: "./../fonts",
                    outputPath: "fonts/",
                },
            },
        ],
    },
    //忽略指定资源的扩展名
    resolve: {
        extensions: ['.jsx', '.less', '.js', '.css']
    },

};
