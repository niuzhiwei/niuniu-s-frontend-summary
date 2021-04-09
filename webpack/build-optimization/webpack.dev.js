const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
const {
    smart
} = require('webpack-merge')
const {
    srcPath,
    distPath
} = require('./paths')

module.exports = smart(webpackCommonConf, {
    mode: 'development',
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            path.join(srcPath, 'index.js')
        ],
        other: path.join(srcPath, 'other.js')
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: ['babel-loader?cacheDirectory'], //开启缓存
                include: srcPath,
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            }, {
                test: /\.css$/,
                //loader执行顺序是：从后往前
                //postcss 兼容性
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            }, {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            //window.ENV = 'development'
            ENV: JSON.stringify('development')
        }),
        new HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8080,
        progress: true, //显示打包的进度条
        contentBase: distPath, //根目录
        open: false, //自动打开浏览器
        compress: true, //启动gzip压缩

        hot: true,

        //设置代码
        proxy: {
            //将本地 /api/xxx 代理到 localhost:3000/api/xxx
            '/api': 'http://localhost:3000',
            //将本地 /api2/xxx 代理到localhost:3000/xxx
            '/api2': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api2': ''
                }
            }
        }
    }
})