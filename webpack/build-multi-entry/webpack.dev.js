const path = require('path')
const webpack = require('webpack')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common')
const {
    smart
} = require('webpack-merge')
const {
    srcPath,
    distPath
} = require('./paths')

module.exports = smart(webpackCommonConf, {
    mode: 'development',
    module: {
        rules: [{
            test: /\.(png|jpg|jpeg|gif)$/,
            use: 'file-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            //window.ENV = 'development'
            ENV: JSON.stringify('development')
        })
    ],
    devServer: {
        port: 8080,
        progress: true, //显示打包的进度条
        contentBase: distPath, //根目录
        open: false, //自动打开浏览器
        compress: true, //启动gzip压缩

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