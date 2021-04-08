const path = require('path')
const webpack = require('webpack')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common')
const {
    smart
} = require('webpack-merge');
const {
    srcPath,
    distPath
} = require('./paths')

module.exports = smart(webpackCommonConf, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash:8].js',
        path: distPath
    },
    module: {
        rules: [{
            test: /\.(png|jpg|jpeg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    //小于5Kb的图片用base64格式产出
                    limit: 5 * 1024,
                    //打包到img目录下
                    outputPath: '/img1/'
                }
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(), //会默认清空output.path文件夹
        new webpack.DefinePlugin({
            //window.ENV = 'production'
            ENV: JSON.stringify('production')
        })
    ]
})