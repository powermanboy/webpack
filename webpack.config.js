const htmlWebapckPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const devMode = process.env.NODE_ENV !== 'production';
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const path = require("path")
module.exports = {
    entry: {
        index: ["@babel/polyfill", "./src/index.js"],
        one: "./src/one.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name]_[hash].main.js",
    },
    plugins: [
        new htmlWebapckPlugin({//假设是后台应用入口one:"./src/index.js"
            title: "首页",
            filename: "index.html",
            template: "./public/index.html",
            chunks: ["index"]  //chunks指定需要引入的入口模块的键名 index:"./src/index.js"
        }),
        new htmlWebapckPlugin({//假设是后台应用入口one:"./src/one.js"
            title: "one",
            filename: "one.html",
            template: "./public/one.html",
            chunks: ["one"]  //chunks指定需要引入的入口模块的键名 one:"./src/one.js"
        }),
        //把css文件分理处来成为单独文件
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: 'css/[name]-[hash].css',
        //     chunkFilename: '[id].css',
        // }),
        new CleanWebpackPlugin(),
        //确认为生产环境就分离成独立文件，确认为开发环境就不分离css文件
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),


    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/, //忽略目录
                use: {
                    loader: "babel-loader",
                    // options: { //语法库     ES6的语法库      react语法库
                    //     presets: ['babel/preset-env', 'babel/preset-react']
                    // }
                }
            },
            {
                test: /\.css$/,
                use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/,
                use: [devMode ? 'style-loader' :MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader:devMode ? 'style-loader' : MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles sass to CSS
                }]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            publicPath: './../img',
                            outputPath: 'img/'
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: './../fonts',
                    outputPath: 'fonts/'
                },
            },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,//会 gzip(压缩) 和 serve(服务) 所有来自项目根路径下 dist/ 目录的文件
        port: 9000,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            "/data": { //地址
                "target": "http://www.bjlink32.com/data.php", //接口地址,跨域访问
                // secure: false,// 如果是https接口，需要配置这个参数
                "changeOrigin": true,//开启跨域
                "pathRewrite": { "^/data": "" }//如果接口本身没有/data需要通过pathRewrite来重写了地址
            }
        }
    },


    mode: "development",
    devtool: "source-map"
}